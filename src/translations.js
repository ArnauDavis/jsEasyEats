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
            button1: "See All Recipes",
            button2: "See A Random Recipe",
        },
        footer: {
            text1: "Copyright",
            text2: "All rights reserved"
        },
        recipes: {
            text1: "All current recipes",
            allItems: ['brownies', "spanishYogurtCake", 'ganache', 'bananaBread', 'oliveGardenSalmon', 'doubleChocolateChipMuffins'].sort(), // Use the keys here, not the display names
            items: {
                doubleChocolateChipMuffins: {
                name: 'Double Chocolate Chip Muffins',
                story: "These double chocolate muffins are incredibly rich, mega chocolate-y, and loaded with chocolate chips in every single bite. Sour cream helps guarantee a soft and moist muffin that has a denser texture than chocolate cupcakes.",
                stats: {
                  prep: "10 mins",
                  cook: "21 mins",
                  serves: "12-14 muffins"
                },
                ingredients: [
                  "2 cups (250g) all-purpose flour (spooned & leveled)",
                  "1 cup (200g) granulated sugar",
                  "1/2 cup (41g) unsweetened natural cocoa powder",
                  "1 teaspoon baking soda",
                  "1/2 teaspoon salt",
                  "1 and 3/4 cups (315g) semi-sweet chocolate chips",
                  "2 large eggs, at room temperature",
                  "3/4 cup (185g) full fat sour cream or plain yogurt, at room temperature",
                  "1/2 cup (120ml) vegetable oil*",
                  "1/2 cup (120ml) whole milk, at room temperature",
                  "1 and 1/2 teaspoons pure vanilla extract"
                ],
                directions: [
                  "Preheat oven to 425°F (218°C). Spray a 12-count muffin pan with nonstick spray or use cupcake liners.",
                  "Whisk the flour, sugar, cocoa powder, baking soda, salt, and chocolate chips together in a large bowl. Set aside.",
                  "Whisk the eggs, sour cream, oil, milk, and vanilla extract together until combined.",
                  "Pour wet ingredients into dry ingredients and fold together with a silicone spatula or wooden spoon until completely combined. Avoid overmixing.",
                  "Spoon the batter into liners, filling them all the way to the top.",
                  "Bake for 5 minutes at 425°F then, keeping the muffins in the oven, reduce the oven temperature to 350°F (177°C).",
                  "Bake for an additional 15-16 minutes or until a toothpick inserted in the center comes out clean.",
                  "Cool muffins for 10 minutes in the pan, then transfer to a wire rack until ready to eat.",
                  "Note: For mini muffins, bake 13-14 total minutes at 350°F (177°C) the whole time. Cover leftovers and store at room temperature for 5 days or in the fridge for 1 week."
                ]
              },
                bananaBread: {
                  name: 'Banana Bread',
                  story: "A fan favorite, soft, delicious and full of potassium, this banana bread won't survive the night if left out on a counter.",
                  stats: {
                    prep: "25 mins",
                    cook: "40 mins",
                    serves: "2 loaves"
                  },
                  ingredients: [
                    "1/2 cup unsalted butter, at room temperature",
                    "1 cup granulated sugar",
                    "2 large eggs",
                    "2 cups all purpose flour",
                    "1 tsp baking soda",
                    "1/2 tsp salt",
                    "3-4 medium bananas, mashed",
                    "1 tsp vanilla extract"
                  ],
                  directions: [
                    "Preheat the oven to 350°F and line two 8x4 bread pans with parchment paper or grease well.",
                    "In a medium bowl, mash the bananas with a fork until smooth with some small bits for texture; set aside.",
                    "In a separate bowl, cream the butter and sugar together using a mixer.",
                    "Add the eggs and cream the mixture until well combined.",
                    "Add the flour, baking soda, and salt. Mix until just combined.",
                    "Stir in the mashed bananas and vanilla extract until fully incorporated.",
                    "Divide the batter evenly between the two pans and bake for 35-40 minutes until the top is puffed and a tester comes out clean.",
                    "Cool in the pan for 5-10 minutes, then move to a wire rack to cool completely.",
                    "Serve warm, at room temperature, or cold with a little butter.",
                    "Note: To bake in a single 9x5 pan, bake at 350°F for 35 minutes, then lower to 325°F for another 20-25 minutes. If the top gets too dark, tent with foil."
                  ]
                },
              brownies: {
                name: 'Brownies',
                story: "This recipe has been in my family for three generations, it has been perfected by Ari.",
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
                spanishYogurtCake: {
                    name: 'Spanish Yogurt Cake',
                    story: "A delicious cake served best with Aleix's Ganache",
                    stats: {
                      prep: "10 mins",
                      cook: "35 mins",
                      serves: 10
                    },
                    ingredients: [
                      "1 natural or lemon yogurt",
                      "1 yogurt container measure of sunflower oil",
                      "2 yogurt container measures of sugar",
                      "3 yogurt container measures of flour",
                      "1 packet of Royal-style baking powder (16g)",
                      "3 eggs",
                      "Zest of 1 lemon",
                      "Butter for greasing the mold"
                    ],
                    directions: [
                      "Preheat the oven to 180°C",
                      "In a bowl, add the eggs and sugar and beat well. Add the yogurt and then the oil, continuing to beat the mixture.",
                      "Gradually incorporate the sifted flour mixed with the baking powder, stirring until there are no lumps.",
                      "Add the lemon zest to the batter.",
                      "Grease a mold with a little bit of butter to prevent sticking and pour in the batter.",
                      "Place in the oven with bottom heat at 180°C for approximately 35 minutes. To check if it is done, prick the cake with a toothpick; if it comes out clean, it is ready.",
                      "Let it cool before removing it from the mold, and it will be ready to eat."
                    ]
                },
                ganache: {
                      name: 'Chocolate Ganache',
                      story: "Throughout the kitchen and the pantry, Aleix alone is the Honored One. When Aleix enters the kitchen, the balance of the culinary world shifts. This ganache is the pinnacle of Cursed Technique: richness and sweetness colliding to create the perfect Hollow Purple. They asked Aleix, 'Would you lose the flavor profile if you used cheaper chocolate?' He simply replied, 'Nah, I’d win.",
                      stats: {
                        prep: "10 mins",
                        cook: "3 mins",
                        serves: "1.5 cups"
                      },
                      ingredients: [
                        "Two 4-ounce quality semi-sweet chocolate bars (113g each), finely chopped",
                        "1 cup (8 ounces; 240ml) heavy cream or heavy whipping cream"
                      ],
                      directions: [
                        "Place chopped chocolate in a medium heat-proof bowl.",
                        "Heat the cream in a small saucepan over medium heat until it begins to gently simmer. (Do not let it come to a rapid boil—that’s too hot!)",
                        "Pour over chocolate, then let it sit for 2–3 minutes to gently soften the chocolate.",
                        "With a metal spoon or small silicone spatula, very slowly stir until completely combined and chocolate has melted.",
                        "Use immediately as a drizzle, or let sit at room temperature for up to 2 hours to cool and thicken. If refrigerating to speed up the process, stir occasionally to ensure it stays smooth.",
                        "Once completely cool and thick, the ganache can be piped, scooped, or beaten with a mixer for 4 minutes until light in color and texture.",
                        "Store covered in the refrigerator for up to 5 days or freeze for up to 3 months. Thaw in the refrigerator and rewarm over a double boiler if thinning is needed."
                      ]
                    },
                    oliveGardenSalmon: {
                      name: 'Olive Garden Salmon',
                      story: "Many ways to make salmon, here's one that'll make you feel like you're apart of the family.",
                      stats: {
                        prep: "15 mins",
                        cook: "15 mins",
                        serves: "4"
                      },
                      ingredients: [
                        "4 Salmon Filets with the skin on",
                        "4 tsp Olive Oil",
                        "1 Lemon",
                        "1 Tbsp Italian Seasoning",
                        "1 tsp Salt",
                        "½ tsp Pepper",
                        "½ cup Unsalted Butter softened at room temperature",
                        "2 tsp Minced Garlic",
                        "1 tsp Fresh Parsley chopped"
                      ],
                      directions: [
                        "Place the salmon fillets on a large plate.",
                        "Squeeze the lemon juice on top and around the salmon fillets. Then season the salmon with the salt, pepper and Italian seasoning.",
                        "Rub the seasonings into the salmon well on both sides.",
                        "Allow the salmon to marinade for 10-15 minutes.",
                        "Preheat the grill to 400 degrees F and rub some olive oil on the grill grates so that the salmon does not stick to the grill. Gently place the salmon on the grill, skin side down and brush the salmon with the oil on both sides.",
                        "Close the lid and cook the salmon for 14-20 minutes until the salmon is flakey with a fork.",
                        "For the Garlic Herb Butter: Stir together all the ingredients in a small bowl.",
                        "Serve the salmon with the garlic butter on top and enjoy!"
                      ]
                    },  
            }
        },
        recipe: {
            text1: "Recipe for",
            text2: "Prep time",
            text3: "minutes",
            text4: "Serves",
            text5: "Ingredients",
            text6: "Directions",
            text7: "Cook time",
            text8: "See all recipes",
            text9: "Stats",
            text10: "Recipe not found.",
            
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
            button1: "Veure totes les receptes",
            button2: "Veure una recepta a l'atzar",
        },
        footer: {
            text1: "Propietat intel·lectual",
            text2: "Tots els drets reservats"
        },
        recipes: {
            text1: "Totes les receptes actuals",
            allItems: ['brownies', "spanishYogurtCake", 'ganache', 'bananaBread', 'oliveGardenSalmon', 'doubleChocolateChipMuffins'].sort(),
                items: {
                    doubleChocolateChipMuffins: {
                      name: 'Muffins de Doble Xocolata',
                      story: "Aquests muffins de doble xocolata són increïblement rics, súper xocolatats i plens de xips de xocolata a cada mossegada. La crema agra garanteix un muffin suau i humit amb una textura més densa que la dels pastissets de xocolata.",
                      stats: {
                        prep: "10 min",
                        cook: "21 min",
                        serves: "12-14 muffins"
                      },
                      ingredients: [
                        "2 tasses (250 g) de farina de blat",
                        "1 tassa (200 g) de sucre granulat",
                        "1/2 tassa (41 g) de cacau en pols natural sense sucre",
                        "1 culleradeta de bicarbonat de sodi",
                        "1/2 culleradeta de sal",
                        "1 i 3/4 tasses (315 g) de xips de xocolata semidulça",
                        "2 ous grans, a temperatura ambient",
                        "3/4 de tassa (185 g) de crema agra o iogurt natural, a temperatura ambient",
                        "1/2 tassa (120 ml) d'oli vegetal",
                        "1/2 tassa (120 ml) de llet sencera, a temperatura ambient",
                        "1 culleradeta i mitja d'extracte de vainilla pur"
                      ],
                      directions: [
                        "Preescalfeu el forn a 218°C (425°F). Prepareu un motlle per a 12 muffins amb esprai antiadherent o motlles de paper.",
                        "En un bol gran, barregeu la farina, el sucre, el cacau, el bicarbonat, la sal i les xips de xocolata. Reserveu-ho.",
                        "En un altre bol, bateu els ous, la crema agra, l'oli, la llet i la vainilla fins que estiguin ben combinats.",
                        "Aboqueu els ingredients líquids sobre els secs i barregeu-ho amb una espàtula de silicona fins que estigui homogeni. Eviteu barrejar massa; la massa serà espessa.",
                        "Ompliu els motlles amb la massa fins a dalt de tot.",
                        "Enforneu durant 5 minuts a 218°C; després, sense treure els muffins del forn, baixeu la temperatura a 177°C (350°F).",
                        "Enforneu durant 15-16 minuts addicionals o fins que un escuradents surti net.",
                        "Deixeu refredar els muffins 10 minuts al motlle i després passeu-los a una reixeta.",
                        "Nota: Per a muffins petits, enforneu 13-14 minuts a 177°C. Es poden guardar a temperatura ambient 5 dies o a la nevera una setmana."
                      ]
                    },
                    bananaBread: {
                      name: 'Pa de plàtan',
                      story: "Un dels preferits de tothom: suau, deliciós i ple de potassi; aquest pa de plàtan no sobreviurà ni una nit si el deixes al taulell.",
                      stats: {
                        prep: "25 min",
                        cook: "40 min",
                        serves: "2 pans"
                      },
                      ingredients: [
                        "115g de mantega sense sal, a temperatura ambient",
                        "200g de sucre blanc",
                        "2 ous grans",
                        "250g de farina per a tot ús",
                        "1 culleradeta de bicarbonat de sodi",
                        "1/2 culleradeta de sal",
                        "3-4 plàtans mitjans, aixafats",
                        "1 culleradeta d'extracte de vainilla"
                      ],
                      directions: [
                        "Preescalfeu el forn a 175°C i prepareu dos motlles de 20x10 cm amb paper de forn o greixeu-los bé.",
                        "En un bol mitjà, xafeu els plàtans amb una forquilla fins que estiguin ben des fets però amb trossets per donar textura.",
                        "En un altre bol, bateu la mantega amb el sucre fins a obtenir una crema.",
                        "Afegiu-hi els ous i continueu bategant fins que estigui ben combinat.",
                        "Incorporeu-hi la farina, el bicarbonat i la sal. Barregeu-ho fins que quedi homogeni.",
                        "Finalment, afegiu-hi els plàtans aixafats i la vainilla.",
                        "Repartiu la massa entre els dos motlles i enforneu uns 35-40 minuts o fins que l'escuradents surti net.",
                        "Deixeu refredar 5-10 minuts al motlle i després passeu-lo a una reixeta.",
                        "Serviu-lo tebi, a temperatura ambient o fred, preferiblement amb una mica de mantega.",
                        "Nota: Si feu servir un sol motlle gran (23x13 cm), enforneu a 175°C durant 35 minuts, abaixeu a 160°C i coeu 20-25 minuts més. Si es browning massa, tapeu-lo amb paper d'alumini."
                      ]
                    },
                    brownies: {
                        name: 'Brownies',
                        story: "Aquesta recepta ha passat per tres generacions de la meva família i ha estat perfeccionada per l'Ari.",
                        stats: {
                            prep: "10 min",
                            cook: "40 min",
                            serves: 9
                        },
                        ingredients: [
                            "1/2 tassa de mantega, més mantega desfeta addicional per greixar el motlle",
                            "1 tassa de xips de xocolata semidulça",
                            "4 ous grans",
                            "1 tassa de sucre granulat",
                            "1 culleradeta i mitja d'extracte de vainilla",
                            "2/3 de tassa de farina de blat",
                            "2 cullerades de cacau en pols sense sucre",
                            "Sucre de llustre per decorar"
                        ],
                        directions: [
                            "Preescalfeu el forn a 160°C (325 F).",
                            "Unteu un motlle de 23x23 cm amb la mantega desfeta.",
                            "En un cassó al foc, foneu la xocolata i la mantega a foc lent. Remeneu suaument per barrejar-ho bé, retireu-ho i deixeu-ho refredar.",
                            "Bateu els ous, el sucre i la vainilla. Afegiu-hi la xocolata i la mantega foses. Incorporeu la farina i el cacau, i remeneu fins que la barreja sigui homogènia.",
                            "Aboqueu la massa al motlle. Enforneu durant 40 minuts o fins que el centre estigui gairebé ferm.",
                            "Deixeu refredar 45 minuts. Decoreu amb sucre de llustre i talleu-ho en barretes. Bon profit!"
                        ]
                    },
                    spanishYogurtCake: {
                          name: 'Coca de iogurt',
                          story: "Una coca deliciosa que queda millor si se serveix amb la ganache de l'Aleix.",
                          stats: {
                            prep: "10 min",
                            cook: "35 min",
                            serves: 10
                          },
                          ingredients: [
                            "1 iogurt natural o de llimona",
                            "1 mesura del got de iogurt d'oli de gira-sol",
                            "2 mesures del got de iogurt de sucre",
                            "3 mesures del got de iogurt de farina",
                            "1 sobre de llevat tipus Royal (16g)",
                            "3 ous",
                            "Ratlladura d'una llimona",
                            "Mantega per greixar el motlle"
                          ],
                          directions: [
                            "Preescalfeu el forn a 180°C.",
                            "En un bol, poseu-hi els ous i el sucre i bateu-ho bé. Afegiu-hi el iogurt i després l'oli, sense deixar de batre.",
                            "Incorporeu-hi gradualment la farina barrejada amb el llevat tamisats i aneu remenant fins que no hi quedin grumolls.",
                            "Afegiu-hi la ratlladura de la llimona a la massa.",
                            "Engrisseu un motlle amb una mica de mantega perquè no s'enganxi i aboqueu-hi la massa.",
                            "Poseu-ho al forn amb l'escalfor de baix a 180°C durant uns 35 minuts. Per saber si està feta, punxeu la coca amb un escuradents; si surt net, ja està llesta.",
                            "Deixeu-la refredar abans de desemmotllar-la i ja estarà a punt per menjar."
                          ]
                        },
                        ganache: {
                          name: "Ganache de xocolata",
                          story: "A la cuina i al celler, només l'Aleix és l'Honorat. Quan l'Aleix entra a la cuina, l'equilibri del món culinari es desplaça. Aquesta ganache és el cim de la Tècnica Maleïda: riquesa i dolçor xocant per crear el Purpulla Buit perfecte. Li van preguntar a l'Aleix: 'Perdries el perfil de gust si fessis servir xocolata més barata?' Ell simplement va respondre: 'No, jo guanyaria.'",
                          stats: {
                            prep: "10 min",
                            cook: "3 min",
                            serves: "350 ml"
                          },
                          ingredients: [
                            "2 rajoles de xocolata negra de qualitat de 113g cada una, ben picades",
                            "240ml de nata líquida per muntar (mínim 35% matèria grassa)"
                          ],
                          directions: [
                            "Poseu la xocolata picada en un bol mitjà resistent a la calor.",
                            "Escalfeu la nata en un cassó petit a foc mitjà fins que comenci a bullir lleugerament. (No deixeu que arribi a un bull ràpid, ja que estaria massa calenta!)",
                            "Aboqueu la nata sobre la xocolata i deixeu-la reposar de 2 a 3 minuts perquè la xocolata s'estovi.",
                            "Amb una cullera metàl·lica o una espàtula de silicona petita, remeneu molt lentament fins que estigui completament combinat i la xocolata s'hagi fos.",
                            "Utilitzeu-la immediatament com a cobertura, o deixeu-la reposar a temperatura ambient fins a 2 hores perquè es refredi i espesseixi. Si la poseu a la nevera per accelerar el procés, remeneu-la de tant en tant.",
                            "Un cop estigui completament freda i espessa, la ganache es pot utilitzar amb màniga pastissera o batre-la amb varetes durant 4 minuts fins que quedi clara i esponjosa.",
                            "Guardeu-la tapada a la nevera fins a 5 dies o al congelador fins a 3 mesos. Descongeleu-la a la nevera i torneu-la a escalfar al bany maria si cal estovar-la."
                          ]
                        },
                        oliveGardenSalmon: {
                          name: 'Salmó Olive Garden',
                          story: "Hi ha moltes maneres de fer el salmó, aquí en teniu una que us farà sentir com si fóssiu part de la família.",
                          stats: {
                            prep: "15 min",
                            cook: "15 min",
                            serves: "4"
                          },
                          ingredients: [
                            "4 filets de salmó amb pell",
                            "4 culleradetes d'oli d'oliva",
                            "1 llimona",
                            "1 cullerada d'herbes aromàtiques (estil italià)",
                            "1 culleradeta de sal",
                            "½ culleradeta de pebre",
                            "½ tassa de mantega sense sal, a temperatura ambient",
                            "2 culleradetes d'all picat",
                            "1 culleradeta de julivert fresc picat"
                          ],
                          directions: [
                            "Poseu els filets de salmó en un plat gran.",
                            "Expremeu el suc de llimona per sobre i al voltant dels filets. Amaniu el salmó amb la sal, el pebre i les herbes italianes.",
                            "Fregueu bé els condiments pel salmó per ambdues bandes.",
                            "Deixeu marinar el salmó durant 10-15 minuts.",
                            "Precalenteu la graella a 200°C (400°F) i unteu les reixetes amb una mica d'oli d'oliva perquè el salmó no s'enganxi. Poseu el salmó a la graella amb la pell cap avall i pinteu-lo amb oli per ambdues bandes.",
                            "Tanqueu la tapa i cuineu el salmó durant 14-20 minuts fins que s'esmicoli fàcilment amb una forquilla.",
                            "Per a la mantega d'all i herbes: Barregeu tots els ingredients en un bol petit.",
                            "Serviu el salmó amb la mantega d'all per sobre i gaudiu-ne!"
                          ]
                        },
                }
            },
            recipe: {
            text1: "Recepta de",
            text2: "Temps de preparació",
            text3: "minuts",
            text4: "Racions",
            text5: "Ingredients",
            text6: "Instruccions",
            text7: "Temps de cocció",
            text8: "Veure totes les receptes",
            text9: "Estats",
            text10: "No s'ha trobat la recepta.",
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
            button1: "Ver todas las recetas",
            button2: "Ver una receta al azar",
        },footer: {
            text1: "Propiedad intelectual",
            text2: "Todos los derechos reservados"
        },
        recipes: {
            text1: "Todas las recetas actuales",
            allItems: ['brownies', "spanishYogurtCake", 'ganache', 'bananaBread', 'oliveGardenSalmon', 'doubleChocolateChipMuffins'].sort(),
                items: {
                  doubleChocolateChipMuffins: {
                    name: 'Muffins de Doble Chocolate',
                    story: "Estos muffins de doble chocolate son increíblemente ricos, súper chocolatosos y están llenos de pepitas de chocolate en cada bocado. La crema agria garantiza un muffin suave y húmedo con una textura más densa que la de un cupcake tradicional.",
                    stats: {
                      prep: "10 min",
                      cook: "21 min",
                      serves: "12-14 muffins"
                    },
                    ingredients: [
                      "2 tazas (250 g) de harina de trigo todo uso",
                      "1 taza (200 g) de azúcar granulada",
                      "1/2 taza (41 g) de cacao en polvo natural sin azúcar",
                      "1 cucharadita de bicarbonato de sodio",
                      "1/2 cucharadita de sal",
                      "1 y 3/4 tazas (315 g) de pepitas de chocolate semidulce",
                      "2 huevos grandes, a temperatura ambiente",
                      "3/4 de taza (185 g) de crema agria o yogur natural, a temperatura ambiente",
                      "1/2 taza (120 ml) de aceite vegetal",
                      "1/2 taza (120 ml) de leche entera, a temperatura ambiente",
                      "1 y 1/2 cucharaditas de extracto de vainilla puro"
                    ],
                    directions: [
                      "Precalienta el horno a 218°C (425°F). Engrasa un molde para 12 muffins o usa cápsulas de papel.",
                      "En un bol grande, mezcla la harina, el azúcar, el cacao, el bicarbonato, la sal y las pepitas de chocolate. Reserva.",
                      "En otro bol, bate los huevos, la crema agria, el aceite, la leche y la vainilla hasta que estén bien integrados.",
                      "Vierte los ingredientes húmedos sobre los secos y mezcla con una espátula de silicona hasta que se combinen por completo. Evita batir de más; la masa será espesa.",
                      "Llena los moldes con la masa hasta el borde.",
                      "Hornea durante 5 minutos a 218°C; luego, sin sacar los muffins del horno, baja la temperatura a 177°C (350°F).",
                      "Hornea durante 15-16 minutos adicionales o hasta que al insertar un palillo, este salga limpio.",
                      "Deja enfriar los muffins en el molde durante 10 minutos y luego pásalos a una rejilla.",
                      "Nota: Para muffins mini, hornea 13-14 minutos en total a 177°C. Puedes guardarlos a temperatura ambiente por 5 días o en el refrigerador por una semana."
                    ]
                  },
                    bananaBread: {
                      name: 'Pan de plátano',
                      story: "Uno de los favoritos de todos: suave, delicioso y lleno de potasio; este pan de plátano no sobrevivirá ni una noche si lo dejas sobre la encimera.",
                      stats: {
                        prep: "25 min",
                        cook: "40 min",
                        serves: "2 panes"
                      },
                      ingredients: [
                        "115g de mantequilla sin sal, a temperatura ambiente",
                        "200g de azúcar blanca",
                        "2 huevos grandes",
                        "250g de harina de trigo común",
                        "1 cucharadita de bicarbonato de sodio",
                        "1/2 cucharadita de sal",
                        "3-4 plátanos medianos, machacados",
                        "1 cucharadita de extracto de vainilla"
                      ],
                      directions: [
                        "Precalienta el horno a 175°C y prepara dos moldes de 20x10 cm con papel vegetal o engrásalos bien.",
                        "En un bol mediano, machaca los plátanos con un tenedor hasta que estén suaves pero con trocitos para dar textura.",
                        "En un bol aparte, bate la mantequilla y el azúcar hasta obtener una crema.",
                        "Añade los huevos y bate hasta que la mezcla esté bien combinada.",
                        "Incorpora la harina, el bicarbonato y la sal. Mezcla hasta que se integre.",
                        "Por último, añade los plátanos machacados y la vainilla.",
                        "Divide la masa entre los dos moldes y hornea de 35 a 40 minutos o hasta que un palillo salga limpio.",
                        "Deja enfriar en el molde de 5 a 10 minutos y luego pásalo a una rejilla.",
                        "Sirve caliente, a temperatura ambiente o frío, ¡con un poco de mantequilla está mejor!",
                        "Nota: Si usas un solo molde grande (23x13 cm), hornea a 175°C por 35 min, baja a 160°C y cocina 20-25 min más. Si se dora demasiado rápido, cúbrelo con papel de aluminio."
                      ]
                    },
                    brownies: {
                        name: 'Brownies',
                        story: "Esta receta ha estado en mi familia durante tres generaciones y ha sido perfeccionada por Ari.",
                        stats: {
                            prep: "10 min",
                            cook: "40 min",
                            serves: 9
                        },
                        ingredients: [
                            "1/2 taza de mantequilla, más mantequilla derretida adicional para engrasar el molde",
                            "1 taza de chispas de chocolate semidulce",
                            "4 huevos grandes",
                            "1 taza de azúcar granulada",
                            "1 cucharadita y media de extracto de vainilla",
                            "2/3 de taza de harina de todo uso",
                            "2 cucharadas de cacao en polvo sin azúcar",
                            "Azúcar glas para espolvorear"
                        ],
                        directions: [
                            "Precaliente el horno a 160°C (325 F).",
                            "Engrase un molde de 23x23 cm con la mantequilla derretida.",
                            "En una cacerola, derrita el chocolate y la mantequilla a fuego lento. Revuelva suavemente, retire del fuego y deje enfriar.",
                            "Bata los huevos, el azúcar y la vainilla. Agregue el chocolate y la mantequilla derretidos. Incorpore la harina y el cacao hasta que la mezcla esté suave.",
                            "Vierta la mezcla en el molde. Hornee por 40 minutos o hasta que el centro esté casi firme.",
                            "Deje enfriar por 45 minutos. Espolvoree con azúcar glas y corte en barras. ¡A comer!"
                        ]
                    },
                    spanishYogurtCake: {
                          name: 'Bizcocho de yogur',
                          story: "Un bizcocho delicioso que se sirve mejor con el ganache de Aleix.",
                          stats: {
                            prep: "10 min",
                            cook: "35 min",
                            serves: 10
                          },
                          ingredients: [
                            "1 yogur natural o de limón",
                            "1 medida del vasito de yogur de aceite de girasol",
                            "2 medidas del vasito de yogur de azúcar",
                            "3 medidas del vasito de yogur de harina",
                            "1 sobre de levadura tipo Royal (16g)",
                            "3 huevos",
                            "Ralladura de un limón",
                            "Mantequilla para engrasar el molde"
                          ],
                          directions: [
                            "Precalentar el horno a 180°C.",
                            "En un bol, añadir los huevos y el azúcar y batir bien. Añadir el yogur y después el aceite, sin dejar de batir.",
                            "Incorporar gradualmente la harina mezclada con la levadura tamizadas y remover hasta que no queden grumos.",
                            "Añadir la ralladura de limón a la mezcla.",
                            "Engrasar un molde con un poco de mantequilla para que no se pegue y verter la masa.",
                            "Meter en el horno con calor abajo a 180°C durante unos 35 minutos. Para saber si está listo, pinchar el bizcocho con un palillo; si sale limpio, ya está preparado.",
                            "Dejar enfriar antes de desmoldar y ya estará listo para comer."
                          ]
                    },
                    ganache: {
                          name: "Ganache de chocolate",
                          story: "En la cocina y en la despensa, solo Aleix es el Honorado. Cuando Aleix entra en la cocina, el equilibrio del mundo culinario se desplaza. Esta ganache es la cima de la Técnica Maldita: riqueza y dulzura colisionando para crear el Púrpura Imaginario perfecto. Le preguntaron a Aleix: '¿Perderías el perfil de sabor si usaras chocolate más barato?' Él simplemente respondió: 'No, yo ganaría.'",
                          stats: {
                            prep: "10 min",
                            cook: "3 min",
                            serves: "350 ml"
                          },
                          ingredients: [
                            "2 tabletas de chocolate negro de calidad de 113g cada una, finamente picadas",
                            "240ml de nata para montar o crema para batir"
                          ],
                          directions: [
                            "Coloca el chocolate picado en un bol mediano resistente al calor.",
                            "Calienta la nata en un cazo pequeño a fuego medio hasta que comience a hervir suavemente. (¡No dejes que llegue a un hervor rápido, estaría demasiado caliente!)",
                            "Vierte la nata sobre el chocolate y deja reposar de 2 a 3 min para que el chocolate se ablande.",
                            "Con una cuchara metálica o espátula de silicona, remueve muy lentamente hasta que esté totalmente combinado y el chocolate se haya fundido.",
                            "Úsala de inmediato como cobertura líquida, o déjala reposar a temperatura ambiente hasta 2 horas para que espese. Si la refrigeras para acelerar el proceso, remueve de vez en cuando.",
                            "Una vez fría y espesa, la ganache se puede usar con manga pastelera o batir con varillas durante 4 minutos hasta que esté ligera y aireada.",
                            "Guárdala tapada en el refrigerador hasta 5 días o congélala hasta 3 meses. Descongela en la nevera y recalienta al baño maría si necesitas que vuelva a estar líquida."
                          ]
                        },
                        oliveGardenSalmon: {
                          name: 'Salmón Olive Garden',
                          story: "Hay muchas formas de preparar el salmón, aquí tienes una que te hará sentir como si fueras parte de la familia.",
                          stats: {
                            prep: "15 min",
                            cook: "15 min",
                            serves: "4"
                          },
                          ingredients: [
                            "4 filetes de salmón con piel",
                            "4 cucharaditas de aceite de oliva",
                            "1 limón",
                            "1 cucharada de sazonador italiano",
                            "1 cucharadita de sal",
                            "½ cucharadita de pimienta",
                            "½ taza de mantequilla sin sal, a temperatura ambiente",
                            "2 cucharaditas de ajo picado",
                            "1 cucharadita de perejil fresco picado"
                          ],
                          directions: [
                            "Coloca los filetes de salmón en un plato grande.",
                            "Exprime el jugo de limón encima y alrededor de los filetes. Luego, sazona el salmón con la sal, la pimienta y el sazonador italiano.",
                            "Frota bien los condimentos en el salmón por ambos lados.",
                            "Deja marinar el salmón durante 10-15 minutos.",
                            "Precalienta la parrilla a 200°C (400°F) y frota un poco de aceite de oliva en las rejillas para que el salmón no se pegue. Coloca suavemente el salmón en la parrilla con la piel hacia abajo y pincela el salmón con aceite por ambos lados.",
                            "Cierra la tapa y cocina el salmón durante 14-20 minutos hasta que se desmorone fácilmente con un tenedor.",
                            "Para la mantequilla de ajo y hierbas: Mezcla todos los ingredientes en un tazón pequeño.",
                            "¡Sirve el salmón con la mantequilla de ajo por encima y disfruta!"
                          ]
                        },
                }
            },
        recipe: {
            text1: "Receta de",
            text2: "Tiempo de preparación",
            text3: "minutos",
            text4: "Porciones",
            text5: "Ingredientes",
            text6: "Preparación",
            text7: "Tiempo de cocción",
            text8: "Ver todas las recetas",
            text9: "Estads",
            text10: "No se encontró la receta",
        }       
    }   

}
