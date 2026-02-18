export const translations = {
    en: {
        header: {
            text1: "Search"
        },
        landing: {
            tag1: "All your favorite recipes,",
            tag2: "streamlined",
            tag3: "for your busiest days.",
            intro: "Find every meal you love in one convenient, stress-free place. We’ve simplified the steps so you can get amazing food on the table faster than ever.",
            button1: "Get Started",
            button2: "Learn More",
        },
        footer: {
            text1: "Copyright",
            text2: "All rights reserved"
        },
        recipes: {
            allItems: ['brownies', 'ck alfredo', 'basil Pesto'], // Use the keys here, not the display names
            items: {
              brownies: {
                name: 'Brownies',
                story: "This recipe has been in my family for three generations, it has been perfected by Ari.",
                heroImage: "images/alfredo-final.jpg",
                stats: {
                  prep: "10 mins",
                  cook: "40 mins",
                  serves: 9
                },
                ingredients: [
                  "1/2 cup butter, plus additional melted butter for greasing pan", "1 cup semisweet chocolate chips", "4 large eggs",
                  "1 cup granulated sugar", "1 & 1/2 teaspoons vanilla extract", "2/3 cup all-purpose flour", "2 tablespoons unsweetened cocoa powder",
                  "Confectioners' sugar for dusting brownies"
                ],
                directions: [
                  "Preheat oven to 325 F", "Grease a 9 x 9 x 2-inch baking pan with melted butter", "On your stovetop, take a heavy saucepan and melt the chocolate and butter over low heat. Then stir gently to blend well, set it aside, and let it cool",
                  "Beat together the eggs, sugar, and vanilla extract. Add the melted chocolate and butter. Fold in in the flour and the cocoa, and stir the mixture until it is well blended and smooth.",
                  "Pour the batter into the pan and spread it to the edges. Bake for 40 minutes or until the center of the top is almost firm and a toothpick inserted in the center comes out with dry crumbs sticking to it.",
                  "Remove the pan and let it stand for 45 minutes or until completely cool. Dust with confectioners' sugar and cut into 1 & 1/2 x 3-inch bars. Makes 18 bars. Now eat up!"
                ]
              },
              // ... other recipes
            }
        }
    },
    cat:{
        header: {
            text1: "Cercar"
        },
        landing: {
            tag1: "Totes les teves receptes preferides,",
            tag2: "optimitzades",
            tag3: "per als teus dies més ocupats.",
            intro: "Troba tots els plats que t’encanten en un espai pràctic i sense complicacions. Hem simplificat cada pas perquè puguis gaudir d'un menjar increïble més ràpid que mai.",
            button1: "Comença ara",
            button2: "Saber-ne més",
        },
        footer: {
            text1: "Propietat intel·lectual",
            text2: "Tots els drets reservats"
        },
    },
    es:{
        header: {
            text1: "Buscar"
        },
        landing: {
            tag1: "Todas tus recetas favoritas,",
            tag2: "optimizadas",
            tag3: "para tus días más ocupados.",
            intro: "Encuentra todos los platos que te encantan en un solo lugar, práctico y sin complicaciones. Hemos simplificado cada paso para que disfrutes de una comida increíble más rápido que nunca.",
            button1: "Empezar ahora",
            button2: "Saber más",
        },footer: {
            text1: "Propiedad intelectual",
            text2: "Todos los derechos reservados"
        },

    }
}


const recipes = {
    allItems : ['chicken alfredo','brownies','basil pesto'],
    ckAlf : {
        name: 'chicken alfredo',
        ingredients: ['pasta','chicken','alfredo'],
        directions: ['boil pasta', 'cook chicken', 'simmer sauce', 'mix']
    },
    brownies: {
        name: 'brownies',
        ingredients: ['chocolate','flour','sugar'],
        directions: ['melt chocolate','mix all ingredients']
    }

}