const delayAnimate = 100;
const isMobileWidth = window.innerWidth <= 480;
const isMobileHorizationWidth = window.innerWidth >= 481 && window.innerWidth <= 767;
const isTabletWidth = window.innerWidth >= 768 && window.innerWidth <= 1023;
const isIpadProWidth = window.innerWidth == 1024;
const isPcWidth =  window.innerWidth > 1024;

const listClasses = [
    {
        name: 'a-1',
        scrollTop: isMobileWidth && 0 || 
        isMobileHorizationWidth && 0 || 
        isTabletWidth && 0 || 
        isIpadProWidth && 0 ||
        isPcWidth && 0,
        delay: delayAnimate
    },
    {
        name: 'a-2',
        scrollTop: isMobileWidth && 600 || 
        isMobileHorizationWidth && 750 || 
        isTabletWidth && 1000 || 
        isIpadProWidth && 700 ||
        isPcWidth && 700,
        delay: delayAnimate
    },
    {
        name: 'a-4',
        scrollTop: isMobileWidth && 1800 || 
        isMobileHorizationWidth && 2000 || 
        isTabletWidth && 2200 || 
        isIpadProWidth && 1000 ||
        isPcWidth && 1000,
        delay: delayAnimate
    },
    {
        name: 'a-5',
        scrollTop: isMobileWidth && 2400 || 
        isMobileHorizationWidth && 2600 || 
        isTabletWidth && 2600 || 
        isIpadProWidth && 1400 ||
        isPcWidth && 1400,
        delay: delayAnimate
    }
] 

