/**
 * Analytics and conversion tracking utilities
 * Compatible with GA4, Plausible, and PostHog
 */

type EventName = 
  | 'hero_cta_click'
  | 'code_copy'
  | 'policy_example_switch'
  | 'integration_tile_click'
  | 'book_demo_submit'
  | 'book_demo_click'
  | 'get_started_click'
  | 'pricing_tier_select'
  | 'docs_search'
  | 'nav_click'
  | 'footer_link_click'
  | 'trust_badge_click'
  | 'page_view';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track an analytics event
 * @param event - Event name
 * @param properties - Event properties
 */
export function trackEvent(event: EventName, properties?: EventProperties): void {
  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event, properties);
  }

  // Track with window.gtag if available (GA4)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', event, properties);
  }

  // Track with window.plausible if available (Plausible)
  if (typeof window !== 'undefined' && 'plausible' in window) {
    (window as any).plausible(event, { props: properties });
  }

  // Track with window.posthog if available (PostHog)
  if (typeof window !== 'undefined' && 'posthog' in window) {
    (window as any).posthog?.capture(event, properties);
  }
}

/**
 * Track a page view
 * @param path - Page path
 * @param properties - Additional properties
 */
export function trackPageView(path?: string, properties?: EventProperties): void {
  const pagePath = path || (typeof window !== 'undefined' ? window.location.pathname : '/');
  
  trackEvent('page_view', {
    page_path: pagePath,
    ...properties,
  });
}

/**
 * Track CTA clicks
 */
export function trackCTAClick(ctaType: 'get_started' | 'book_demo', location: string): void {
  trackEvent(ctaType === 'get_started' ? 'get_started_click' : 'book_demo_click', {
    location,
    cta_type: ctaType,
  });
}

/**
 * Track hero CTA clicks
 */
export function trackHeroCTA(ctaText: string): void {
  trackEvent('hero_cta_click', {
    cta_text: ctaText,
  });
}

/**
 * Track code copy events
 */
export function trackCodeCopy(language: string, snippet?: string): void {
  trackEvent('code_copy', {
    language,
    snippet_preview: snippet ? snippet.substring(0, 50) : undefined,
  });
}

/**
 * Track policy example switches
 */
export function trackPolicySwitch(scenarioId: string, scenarioName: string): void {
  trackEvent('policy_example_switch', {
    scenario_id: scenarioId,
    scenario_name: scenarioName,
  });
}

/**
 * Track integration tile clicks
 */
export function trackIntegrationClick(integrationName: string): void {
  trackEvent('integration_tile_click', {
    integration_name: integrationName,
  });
}

/**
 * Track navigation clicks
 */
export function trackNavClick(navItem: string, destination: string): void {
  trackEvent('nav_click', {
    nav_item: navItem,
    destination,
  });
}

/**
 * Track footer link clicks
 */
export function trackFooterClick(section: string, link: string): void {
  trackEvent('footer_link_click', {
    section,
    link,
  });
}

/**
 * Track trust badge interactions
 */
export function trackTrustBadgeClick(badgeType: string): void {
  trackEvent('trust_badge_click', {
    badge_type: badgeType,
  });
}

// Export default tracking function
export const track = trackEvent;

