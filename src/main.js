Vue.config.devtools = true;

var app = new Vue (
    {
      el: "#root",
      data: {
        logo: "./assets/img/logo.png",
        open: false,
        search: false,
        navBar: [
          {
            label: "Home",
            class: "active",
            link: "https://digilander.libero.it/marinel/images/simpsons/casasimp.jpg"
          },
          {
            label: "Apple",
            link:"https://www.antoniopaolillo.com/wp-content/uploads/2020/03/mela-rossa-1-scaled.jpg"
          },
          {
            label: "Microsoft",
            link: "https://i.insider.com/5224bf6c6bb3f71361461a59?width=980&format=jpeg"
          },
          {
            label: "Android",
            link: "https://www.starwarsaddicted.it/wp-content/uploads/2019/12/c3po.jpg"
          },
          {
            label: "Forums",
            link: "https://www.youtube.com/watch?v=7mhi4Pbicgw"
          },
          {
            label: "Contact Us",
            link: "https://paolocurtaz.it/wp-content/uploads/2019/10/no-grazie.jpg"
          }
        ],
        cardLatestTop: [
          {
            img: "./assets/img/post_feat_img_25-320x202.jpg",
            title: "Morbi vitae dui euismond vulputate sollicitudin",
            date: "October 11th, 2015",
            comments: "2 Comments",
            text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl." 
          },
          {
            img: "./assets/img/post_feat_img_24-320x202.jpg",
            title: "Vivamus pellenteque, felis quis varius",
            date: "October 11th, 2015",
            comments: "Comments off",
            text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl." 
          },
          {
            img: "./assets/img/post_feat_img_23-320x202.jpg",
            title: "Donec ornare pretium eget scelisque justo",
            date: "October 11th, 2015",
            comments: "Comments off",
            text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl." 
          }
        ],
        cardLatestBottom: [
          {
            img: "./assets/img/post_feat_img_22-320x202.jpg",
            title: "Fusci sollicitudin nunc sed placerat varius",
            date: "October 11th, 2015",
            comments: "Comments off",
            text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl." 
          },
          {
            img: "./assets/img/post_feat_img_21-320x202.jpg",
            title: "Donec facilis sodales leo sit amet laoreet ",
            date: "October 11th, 2015",
            comments: "Comments off",
            text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl." 
          },
          {
            img: "./assets/img/post_feat_img_20-320x202.jpg",
            title: "Proin eu purus sed aru aliquet curabir vens",
            date: "October 11th, 2015",
            comments: "Comments off",
            text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl." 
          }
        ],
        miniCards: [
          {
            img: "./assets/img/post_feat_img_23-147x118.jpg",
            title: "Donec ornare pretium eget elet scelisque justo",
            date: "October 11th, 2015",
            comments: "Comments off",
          },
          {
            img: "./assets/img/post_feat_img_22-147x118.jpg",
            title: "Fusci sollicitudin nunc sed placerat varius",
            date: "October 11th, 2015",
            comments: "Comments off",
          },
          {
            img: "./assets/img/post_feat_img_20-147x118.jpg",
            title: "Proin eu purus sed aru aliquet curabir vens",
            date: "October 11th, 2015",
            comments: "Comments off",
          }
        ],
        modules: [
          {
            icon: "fas fa-file-alt small",
            title: "News & Community",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            icon: "fab fa-apple small",
            title: "Apple Forum",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            icon: "fab fa-windows small",
            title: "Microsoft Forum",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            icon: "fab fa-android",
            title: "Android Forum",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            icon: "fas fa-coffee",
            title: "General Discussion",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            icon: "fas fa-cubes",
            title: "Apps & Software",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            icon: "fas fa-laptop",
            title: "Gadget & Stuff",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            icon: "fas fa-wrench",
            title: "Tutorials & Guides",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
        ],
        footerCol1: [
          {
            title: "avada tech forum",
            text: "In quis lectus sed leo elementum faucibus in dapibus dictum. Nulla molestie tortor nec lectus venenatis, sed blandit dui finibus.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          }
        ],
        footerCol2: [
          {
            title: "popular topics",
            text: "Donec finibus sit amet orci eget ultricies.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "Praesent Posuere ante ut erat fringilla.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "Nulla molestie tortor nec lectus venenatis.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "In quis lectus sed leo elementum faucibus in dapibus dictum.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
        ],
        footerCol3: [
          {
            title: "recent topics",
            text: "Donec finibus sit amet orci eget ultricies.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "Praesent Posuere ante ut erat fringilla.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "Nulla molestie tortor nec lectus venenatis.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "In quis lectus sed leo elementum faucibus in dapibus dictum.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
        ],
        footerCol4: [
          {
            title: "latest replies",
            text: "Donec finibus sit amet orci eget ultricies.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "Praesent Posuere ante ut erat fringilla.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "Nulla molestie tortor nec lectus venenatis.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
          {
            text: "In quis lectus sed leo elementum faucibus in dapibus dictum.",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
          },
        ],
        iconsFooter: [
          {
            class: "fab fa-facebook-f",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
            name: "Facebook"
          },
          {
            class: "fab fa-twitter",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
            name: "Twitter"
          },
          {
            class: "fab fa-instagram",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
            name: "Instagram"
          },
          {
            class: "fab fa-youtube",
            link: "https://i.imgur.com/wrv4Ngp.jpeg",
            name: "Youtube"
          }
        ]  
      },
      methods: {
        showMobile: function (){
          if (this.open == false) {
            this.open = true;
          } else {
            this.open = false;
          }
        },
    }
});