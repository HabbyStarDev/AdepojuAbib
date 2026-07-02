import { useEffect } from "react";

interface PerformanceMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Function to send metrics to analytics or logging service
    const sendToAnalytics = (metric: PerformanceMetric) => {
      // console.log("Performance Metric:", metric);

      // In a real application, you would send this to your analytics service
      // Example: gtag('event', metric.name, { value: metric.value, custom_map: { metric_rating: 'dimension1' } });

      // You can also store in localStorage for debugging
      const existingMetrics = JSON.parse(
        localStorage.getItem("performance-metrics") || "[]"
      );
      existingMetrics.push({
        ...metric,
        timestamp: new Date().toISOString(),
      });

      // Keep only last 10 metrics
      if (existingMetrics.length > 10) {
        existingMetrics.splice(0, existingMetrics.length - 10);
      }

      localStorage.setItem(
        "performance-metrics",
        JSON.stringify(existingMetrics)
      );
    };

    // Monitor navigation timing using native Performance API
    const monitorNavigationTiming = () => {
      if ("performance" in window && "getEntriesByType" in performance) {
        const navigationEntries = performance.getEntriesByType("navigation");
        if (navigationEntries.length > 0) {
          const navEntry = navigationEntries[0] as PerformanceNavigationTiming;

          // First Contentful Paint (approximated)
          const paintEntries = performance.getEntriesByType("paint");
          const fcpEntry = paintEntries.find(
            (entry) => entry.name === "first-contentful-paint"
          );
          if (fcpEntry) {
            const fcpRating =
              fcpEntry.startTime <= 1800
                ? "good"
                : fcpEntry.startTime <= 3000
                ? "needs-improvement"
                : "poor";
            sendToAnalytics({
              name: "FCP",
              value: fcpEntry.startTime,
              rating: fcpRating,
            });
          }

          // Largest Contentful Paint (approximated)
          const lcpEntries = performance.getEntriesByType(
            "largest-contentful-paint"
          );
          if (lcpEntries.length > 0) {
            const lcpEntry = lcpEntries[lcpEntries.length - 1];
            const lcpRating =
              lcpEntry.startTime <= 2500
                ? "good"
                : lcpEntry.startTime <= 4000
                ? "needs-improvement"
                : "poor";
            sendToAnalytics({
              name: "LCP",
              value: lcpEntry.startTime,
              rating: lcpRating,
            });
          }

          // First Input Delay (approximated using Total Blocking Time)
          const longTaskEntries = performance.getEntriesByType("longtask");
          const totalBlockingTime = longTaskEntries.reduce(
            (total, entry) => total + entry.duration,
            0
          );
          const fidRating =
            totalBlockingTime <= 200
              ? "good"
              : totalBlockingTime <= 500
              ? "needs-improvement"
              : "poor";
          sendToAnalytics({
            name: "FID (approx)",
            value: totalBlockingTime,
            rating: fidRating,
          });

          // Time to First Byte
          const ttfbRating =
            navEntry.responseStart <= 800
              ? "good"
              : navEntry.responseStart <= 1800
              ? "needs-improvement"
              : "poor";
          sendToAnalytics({
            name: "TTFB",
            value: navEntry.responseStart,
            rating: ttfbRating,
          });

          // Cumulative Layout Shift (approximated)
          const layoutShiftEntries =
            performance.getEntriesByType("layout-shift");
          const clsValue = layoutShiftEntries.reduce((total, entry) => {
            return total + (entry as any).value;
          }, 0);
          const clsRating =
            clsValue <= 0.1
              ? "good"
              : clsValue <= 0.25
              ? "needs-improvement"
              : "poor";
          sendToAnalytics({
            name: "CLS (approx)",
            value: clsValue,
            rating: clsRating,
          });
        }
      }
    };

    // Monitor resource loading times
    const monitorResourceTiming = () => {
      if ("PerformanceObserver" in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === "resource") {
              const resourceEntry = entry as PerformanceResourceTiming;

              // Only track important resources
              if (resourceEntry.duration > 1000) {
                sendToAnalytics({
                  name: `Resource Load: ${resourceEntry.name.split("/").pop()}`,
                  value: resourceEntry.duration,
                  rating:
                    resourceEntry.duration > 3000
                      ? "poor"
                      : resourceEntry.duration > 1000
                      ? "needs-improvement"
                      : "good",
                });
              }
            }
          }
        });

        resourceObserver.observe({ entryTypes: ["resource"] });
      }
    };

    // Monitor memory usage (if available)
    const monitorMemoryUsage = () => {
      if ("memory" in performance) {
        const checkMemoryUsage = () => {
          const memory = (performance as any).memory;
          if (memory.usedJSHeapSize > 50 * 1024 * 1024) {
            // 50MB
            sendToAnalytics({
              name: "High Memory Usage",
              value: memory.usedJSHeapSize / (1024 * 1024), // Convert to MB
              rating:
                memory.usedJSHeapSize > 100 * 1024 * 1024
                  ? "poor"
                  : "needs-improvement",
            });
          }
        };

        // Check memory usage every 30 seconds
        const memoryInterval = setInterval(checkMemoryUsage, 30000);
        checkMemoryUsage(); // Check immediately

        return () => clearInterval(memoryInterval);
      }
    };

    // Initialize monitoring
    monitorNavigationTiming();
    monitorResourceTiming();

    const cleanupMemoryMonitoring = monitorMemoryUsage();

    return () => {
      if (cleanupMemoryMonitoring) cleanupMemoryMonitoring();
    };
  }, []);

  // This component doesn't render anything visible
  return <></>;
};

export default PerformanceMonitor;
