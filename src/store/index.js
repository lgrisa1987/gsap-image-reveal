import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    options: {
      root: null,
      rootMargin: '200px',
      threshold: 0.9,
      easeInOut: 'power3.out'
    }
  },
  mutations: {
    reveal(state, gsap) {
      const revealCallback = (entries, self) => {
          entries.forEach((entry) => {
            const container = entry.target,
              img = entry.target.querySelector("img"),
              {
                easeInOut
              } = state.options,
              revealAnim = gsap.timeline({
                ease: easeInOut
              });

            if (entry.isIntersecting) {
              revealAnim.set(container, {
                visibility: "visible",
              });
              revealAnim.fromTo(
                container,
                3, {
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                  webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                }, {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  ease: easeInOut,
                }
              );
              revealAnim.fromTo(
                img,
                5, {
                  scale: 1.5,
                  rotation: 2,
                }, {
                  scale: 1,
                  rotation: 0,
                  ease: easeInOut,
                  delay: -3,
                }
              );
              self.unobserve(entry.target);
            }
          });
        },
        revealObserver = new IntersectionObserver(revealCallback, state.options);

      document.querySelectorAll(".reveal").forEach((reveal) => {
        revealObserver.observe(reveal);
      });
    },
  },
  actions: {

  },
  modules: {}
})