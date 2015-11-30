(function() {
    var scrollLeft,
      scrollTop,
      sections;
    var findScrollPositions = function(){
      scrollLeft = (window.pageXOffset !== undefined)
        ? window.pageXOffset
        : (document.documentElement
          || document.body.parentNode
          || document.body).scrollLeft;
      scrollTop = (window.pageYOffset !== undefined)
        ? window.pageYOffset
        : (document.documentElement
          || document.body.parentNode
          || document.body).scrollTop;
    };
    var caseStudiesContent = document.querySelector('.case_studies_content');



    var removeActive = function(){
      var caseStudiesNavItems = document.querySelectorAll('.js-cs_nav_item');
      for (var i = 0; i < caseStudiesNavItems.length; i++) {
        caseStudiesNavItems[i].classList.remove('active');
      }
    };
    var addActive = function(name){
      if (name){
        removeActive();
        var navItem = document.querySelector(('.'+name));
        navItem.classList.add('active');
      }
    };

    var caseStudiesNavItems = document.querySelectorAll('.js-cs_nav_item');
    for (var i = 0; i < caseStudiesNavItems.length; i++) {
      var item = caseStudiesNavItems[i];
      item.addEventListener('click', function () {
        removeActive();
        this.classList.add('active');
      });
    }


    var setPageSections = function(){
      var caseStudiesSections = document.querySelector('.js-cs_section'),
        sections = [];
      for (var i = 0; i < caseStudiesSections.length; i++) {
        var section = caseStudiesSections[i];
        var top = section.offsetTop - section.offsetHeight + caseStudiesContent.offsetTop;
        sections.push({
          name : section.getAttribute('name'),
          top : top
        });
      }
      return sections;
    };
    sections = setPageSections();
    var chooseNavByScroll = function(){

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        if(scrollTop >= section.top){
          addActive(section.name);
        }
      }
    };

    var setStickyPos = function () {
      var stickyNav = document.querySelector('.sticky_nav'),
          cscOffsetTop = caseStudiesContent.offsetTop;

      // scrollDifference is the difference in height between
      // the location of the top of the window and
      // the top of the 'case_studies_content' div
      var scrollDifference = scrollTop - cscOffsetTop;

      var combinedOffset = cscOffsetTop + caseStudiesContent.offsetHeight;
      var stickyNavHeight = stickyNav.clientHeight;

      // scrollTopFooterOffset is the combined height of the content
      // offsets less the height the sticky div
      // and the content's bottom padding
      // when scrollTop is greater than scrollTopFooterOffset 'top'
      // property of stickyFooter should be set to scrollTopFooterOffset
      var scrollTopFooterOffset = combinedOffset - stickyNavHeight - 50;

      if (scrollDifference >= 0){
        stickyNav.style.position = 'fixed';
        stickyNav.style.top = 0;
        if (scrollTop > scrollTopFooterOffset){
          stickyNav.style.position = 'absolute';
          stickyNav.style.top = scrollTopFooterOffset - cscOffsetTop + 'px';
        } else {
          stickyNav.style.position = 'fixed';
          stickyNav.style.top = 0;
        }
      } else {
        stickyNav.style.position = 'absolute';
      }
    };

    window.onscroll = function() {
        findScrollPositions();
        setStickyPos();
        chooseNavByScroll();
    };
    window.onresize = function(){
      sections = setPageSections();
      chooseNavByScroll();
    };
  })();