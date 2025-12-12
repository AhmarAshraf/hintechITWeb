// Utility function for smooth scrolling with Locomotive Scroll
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // Try to use Locomotive Scroll if available
    const locomotiveScroll = (window as any).locomotiveScroll;
    if (locomotiveScroll && locomotiveScroll.scrollTo) {
      // Calculate offset to account for header height
      const headerHeight = 80;
      locomotiveScroll.scrollTo(element, {
        offset: -headerHeight,
        duration: 1500,
        easing: [0.25, 0.0, 0.35, 1.0], // Custom easing for smooth animation
      });
      return;
    }
    // Fallback to native smooth scroll
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

