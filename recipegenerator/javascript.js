var dishes = [
  ["Extra-Creamy Scrambled Eggs","https://cooking.nytimes.com//recipes/1021931-extra-creamy-scrambled-eggs"  ],
  ["Creamy Baked Macaroni and Cheese","https://cooking.nytimes.com//recipes/1022733-creamy-baked-macaroni-and-cheese"  ],
  ["Lemony White Bean Soup With Turkey and Greens","https://cooking.nytimes.com//recipes/1021776-lemony-white-bean-soup-with-turkey-and-greens"  ],
  ["Crispy Gnocchi With Burst Tomatoes and Mozzarella","https://cooking.nytimes.com//recipes/1022024-crispy-gnocchi-with-burst-tomatoes-and-mozzarella"  ],
  ["Cold Noodle Salad With Spicy Peanut Sauce","https://cooking.nytimes.com//recipes/1022329-cold-noodle-salad-with-spicy-peanut-sauce"  ],
  ["Updated No-Knead Bread","https://cooking.nytimes.com//recipes/1022147-updated-no-knead-bread"  ],
  ["Grilled Za’atar Chicken With Garlic Yogurt and Cilantro","https://cooking.nytimes.com//recipes/1022300-grilled-zaatar-chicken-with-garlic-yogurt-and-cilantro"  ],
  ["Cucumber-Avocado Salad","https://cooking.nytimes.com//recipes/1022411-cucumber-avocado-salad"  ],
  ["Sheet-Pan Bibimbap","https://cooking.nytimes.com//recipes/1022131-sheet-pan-bibimbap"  ],
  ["Birria de Res","https://cooking.nytimes.com//recipes/1021858-birria-de-res"  ],
  ["Ginger-Dill Salmon","https://cooking.nytimes.com//recipes/1021938-ginger-dill-salmon"  ],
  ["Croissants","https://cooking.nytimes.com//recipes/1022053-croissants"  ],
  ["Double Lemon Chicken","https://cooking.nytimes.com//recipes/1022656-double-lemon-chicken"  ],
  ["Pineapple-Marinated Chicken Breasts","https://cooking.nytimes.com//recipes/1022239-pineapple-marinated-chicken-breasts"  ],
  ["Creamy Asparagus Pasta","https://cooking.nytimes.com//recipes/1022038-creamy-asparagus-pasta"  ],
  ["Sheet-Pan Chicken With Zucchini and Basil","https://cooking.nytimes.com//recipes/1022358-sheet-pan-chicken-with-zucchini-and-basil"  ],
  ["Cauliflower Piccata","https://cooking.nytimes.com//recipes/1022614-cauliflower-piccata"  ],
  ["Braised White Beans and Greens With Parmesan","https://cooking.nytimes.com//recipes/1021902-braised-white-beans-and-greens-with-parmesan"  ],
  ["Coconut Chicken Curry","https://cooking.nytimes.com//recipes/1021760-coconut-chicken-curry"  ],
  ["Vegan Tantanmen With Pan-Fried Tofu","https://cooking.nytimes.com//recipes/1022099-vegan-tantanmen-with-pan-fried-tofu"  ],
  ["Jamaican Curry Chicken and Potatoes","https://cooking.nytimes.com//recipes/1021842-jamaican-curry-chicken-and-potatoes"  ],
  ["Slow Cooker Chicken Ragù With Herbed Ricotta","https://cooking.nytimes.com//recipes/1022080-slow-cooker-chicken-ragu-with-herbed-ricotta"  ],
  ["Coconut Rice With Shrimp and Corn","https://cooking.nytimes.com//recipes/1022459-coconut-rice-with-shrimp-and-corn"  ],
  ["Strawberry and Cream Layer Cake","https://cooking.nytimes.com//recipes/1022272-strawberry-and-cream-layer-cake"  ],
  ["One-Bowl Carrot Cake","https://cooking.nytimes.com//recipes/1022160-one-bowl-carrot-cake"  ],
  ["Quesabirria Tacos","https://cooking.nytimes.com//recipes/1021859-quesabirria-tacos"  ],
  ["Sponge Cake","https://cooking.nytimes.com//recipes/1022270-sponge-cake"  ],
  ["Roasted Chicken Thighs With Cauliflower and Herby Yogurt","https://cooking.nytimes.com//recipes/1021945-roasted-chicken-thighs-with-cauliflower-and-herby-yogurt"  ],
  ["Chocolate Pudding With Raspberry Cream","https://cooking.nytimes.com//recipes/1021898-chocolate-pudding-with-raspberry-cream"  ],
  ["Salmon and Couscous Salad With Cucumber-Feta Dressing","https://cooking.nytimes.com//recipes/1021970-salmon-and-couscous-salad-with-cucumber-feta-dressing"  ],
  ["Potato-Cheddar Soup With Quick-Pickled Jalapeños","https://cooking.nytimes.com//recipes/1021839-potato-cheddar-soup-with-quick-pickled-jalapenos"  ],
  ["Old-Fashioned Butterscotch Pudding","https://cooking.nytimes.com//recipes/1021800-old-fashioned-butterscotch-pudding"  ],
  ["Dutch Oven Chicken and Vinaigrette","https://cooking.nytimes.com//recipes/1022498-dutch-oven-chicken-and-vinaigrette"  ],
  ["Fried Tagliatelle With Chickpeas and Smoky Tomatoes","https://cooking.nytimes.com//recipes/1021789-fried-tagliatelle-with-chickpeas-and-smoky-tomatoes"  ],
  ["Chile-Roasted Chicken With Honey, Lemon and Feta","https://cooking.nytimes.com//recipes/1022164-chile-roasted-chicken-with-honey-lemon-and-feta"  ],
  ["Yo Po Mian","https://cooking.nytimes.com//recipes/1022213-yo-po-mian"  ],
  ["Korean Cheeseburgers With Sesame-Cucumber Pickles","https://cooking.nytimes.com//recipes/1022116-korean-cheeseburgers-with-sesame-cucumber-pickles"  ],
  ["Garlic Chicken With Guasacaca Sauce","https://cooking.nytimes.com//recipes/1022128-garlic-chicken-with-guasacaca-sauce"  ],
  ["Creamy Pan-Roasted Scallops With Fresh Tomatoes","https://cooking.nytimes.com//recipes/1022472-creamy-pan-roasted-scallops-with-fresh-tomatoes"  ],
  ["Classic Apple Pie","https://cooking.nytimes.com//recipes/1022727-classic-apple-pie"  ],
  ["Mushroom Pasta Stir-Fry","https://cooking.nytimes.com//recipes/1022121-mushroom-pasta-stir-fry"  ],
  ["Ritzy Cheddar Chicken Breasts","https://cooking.nytimes.com//recipes/1022240-ritzy-cheddar-chicken-breasts"  ],
  ["Sesame Salmon Bowls","https://cooking.nytimes.com//recipes/1022255-sesame-salmon-bowls"  ],
  ["Spaghetti al Limone With Shrimp","https://cooking.nytimes.com//recipes/1022216-spaghetti-al-limone-with-shrimp"  ],
  ["No-Bake Mango Lime Cheesecake","https://cooking.nytimes.com//recipes/1021843-no-bake-mango-lime-cheesecake"  ],
  ["Chicken Katsu","https://cooking.nytimes.com//recipes/1021957-chicken-katsu"  ],
  ["Pressure Cooker Mushroom and Wild Rice Soup","https://cooking.nytimes.com//recipes/1021942-pressure-cooker-mushroom-and-wild-rice-soup"  ],
  ["Green Salad With Dill Vinaigrette","https://cooking.nytimes.com//recipes/1022752-green-salad-with-dill-vinaigrette"  ],
  ["Goat Cheese and Fig Quick Bread","https://cooking.nytimes.com//recipes/1021824-goat-cheese-and-fig-quick-bread"  ],
  ["One-Pot Orzo With Tomatoes, Corn and Zucchini","https://cooking.nytimes.com//recipes/1022465-one-pot-orzo-with-tomatoes-corn-and-zucchini"  ],
  ["Pasta Alla Zozzona (Rigatoni With Sausage, Guanciale, and Egg Yolks)","https://www.seriouseats.com/pasta-alla-zozzona-rigatoni-with-sausage-and-egg-yolks"  ],
  ["Basque Cheesecake","https://www.seriouseats.com/basque-cheesecake"  ],
  ["Pasta e Ceci (Pasta With Chickpeas)","https://www.seriouseats.com/pasta-e-ceci-pasta-with-chickpeas"  ],
  ["Korean Corn Cheese","https://www.seriouseats.com/korean-corn-cheese-5196495"  ],
  ["Gamja-tang (Korean Pork and Potato Stew)","https://www.seriouseats.com/gamja-tang-pork-and-potato-stew-5198498"  ],
  [" Lemony Tortellini Soup with Spinach and Dill","https://www.bonappetit.com/recipe/lemony-tortellini-soup-with-spinach-and-dill"  ],
  [" Strip Steak au Poivre","https://www.bonappetit.com/recipe/strip-steak-au-poivre"  ],
  [" Green Curry Lentil Soup","https://www.bonappetit.com/recipe/green-curry-lentil-soup"  ],
  [" Sheet-Pan Gnocchi","https://www.bonappetit.com/recipe/sheet-pan-gnocchi"  ],
  [" Cabbage Roll Casserole","https://www.bonappetit.com/recipe/cabbage-roll-casserole"  ],
  [" Sesame Tofu With Broccoli","https://www.bonappetit.com/recipe/sesame-tofu-with-broccoli"  ],
  [" Caramel Crunch–Chocolate Chunklet Cookies","https://www.bonappetit.com/recipe/caramel-crunch-chocolate-chunklet-cookies"  ],
  [" Classic Banana Pudding","https://www.bonappetit.com/recipe/best-banana-pudding"  ],
  [" Morning Glory Baked Oatmeal","https://www.bonappetit.com/recipe/morning-glory-baked-oatmeal"  ],
  [" Thai Roast Chicken Thighs With Coconut Rice","https://www.bonappetit.com/recipe/thai-roast-chicken-thighs-with-coconut-rice"  ],
  ["Simple One-Skillet Chicken Alfredo Pasta","https://www.epicurious.com/recipes/food/views/simple-one-skillet-chicken-alfredo-pasta"  ],
  ["Homemade Stuffing (“Simple Is Best” Dressing)","https://www.epicurious.com/recipes/food/views/simple-is-best-dressing-51124210"  ],
  ["Vegetarian Skillet Stuffed Shells","https://www.epicurious.com/recipes/food/views/vegetarian-skillet-stuffed-shells"  ],
  ["Bombay Masala Chile Cheese Toasties","https://www.epicurious.com/recipes/food/views/bombay-toasties-masala-chile-cheese-tara-obrady"  ],
  ["Nanaimo Bars","https://www.epicurious.com/recipes/food/views/nanaimo-bars"  ],
  ["Old Fashioned","https://www.epicurious.com/recipes/food/views/old-fashioned-235804"  ],
  ["Pasta With 15-Minute Burst Cherry Tomato Sauce","https://www.epicurious.com/recipes/food/views/pasta-with-15-minute-burst-cherry-tomato-sauce-56390060"  ],
  ["Lemon Curd","https://www.epicurious.com/recipes/food/views/lemon-curd-104568"  ],
  ["Three Cities of Spain Cheesecake","https://www.epicurious.com/recipes/food/views/three-cities-of-spain-cheesecake-102595"  ],
  ["Simple Roast Chicken","https://www.epicurious.com/recipes/food/views/my-favorite-simple-roast-chicken-231348"  ],
  ["Simple Hot Cocoa for One","https://www.epicurious.com/recipes/food/views/simple-hot-cocoa-for-one-369469"  ],
  ["Crisp Roast Duck","https://www.epicurious.com/recipes/food/views/crisp-roast-duck-235744"  ],
  ["Banana Pudding Cheesecake Bars","https://www.epicurious.com/recipes/food/views/banana-pudding-cheesecake-bars"  ],
  ["Cioppino Seafood Stew With Gremolata Toasts","https://www.epicurious.com/recipes/food/views/cioppino-seafood-stew-with-gremolata-toasts-51248830"  ],
  ["Classic Dry Martini","https://www.epicurious.com/recipes/food/views/classic-dry-martini-237574"  ],
  ["3-Ingredient Peanut Butter Cookies","https://www.epicurious.com/recipes/food/views/3-ingredient-peanut-butter-cookies"  ],
  ["Low-Country Boil With Shrimp, Corn, and Sausage","https://www.epicurious.com/recipes/food/views/low-country-boil-with-shrimp-corn-and-sausage"  ],
  ["Malted “Forever” Brownies","https://www.epicurious.com/recipes/food/views/malted-forever-brownies"  ],
  ["Leg of Lamb With Garlic and Rosemary","https://www.epicurious.com/recipes/food/views/leg-of-lamb-with-garlic-and-rosemary-105020"  ],
  ["Classic Potato Pancakes","https://www.epicurious.com/recipes/food/views/classic-potato-pancakes-233361"  ],
  ["Caramelized Onion Pasta","https://www.epicurious.com/recipes/food/views/caramelized-onion-pasta"  ],
  ["Oven Risotto with Crispy Roasted Mushrooms","https://www.epicurious.com/recipes/food/views/oven-risotto-with-crispy-roasted-mushrooms"  ],
  ["Salmon Croquettes With Dill Sauce","https://www.epicurious.com/recipes/food/views/salmon-croquettes-dill-sauce"  ],
  ["Salted-Butter Oatmeal Chocolate Chip Cookies","https://www.epicurious.com/recipes/food/views/salted-butter-oatmeal-chocolate-chip-cookies"  ],
  ["Curried Lentil, Tomato, and Coconut Soup","https://www.epicurious.com/recipes/food/views/curried-lentil-tomato-and-coconut-soup"  ],
  ["Dried Ginger Masala Chai","https://www.epicurious.com/recipes/food/views/masala-chai-dried-ginger"  ],
  ["Deep, Dark Chocolate Cake","https://www.epicurious.com/recipes/food/views/deep-dark-chocolate-cake-bakewise"  ],
  ["Old-Fashioned Pecan Pie","https://www.epicurious.com/recipes/food/views/old-fashioned-pecan-pie-356072"  ],
  ["Peach and Butter Pecan Ice Cream Icebox Cake","https://www.epicurious.com/recipes/food/views/easy-peach-butter-pecan-ice-cream-icebox-cake"  ],
  ["Hazelnut Rocher Cheesecake Bars","https://www.epicurious.com/recipes/food/views/frozen-no-bake-cheesecake-bars-edd-kimber"  ],
  ["Cedar-Plank Salmon","https://www.epicurious.com/recipes/food/views/cedar-plank-salmon-354516"  ],
  ["Oatmeal Date Cookies","https://www.epicurious.com/recipes/food/views/oatmeal-date-cookies-roxana-jullapat"  ],
  ["Hot Toddy","https://www.epicurious.com/recipes/food/views/hot-toddy-233821"  ],
  ["Seared Scallops With Brown Butter and Lemon Pan Sauce","https://www.epicurious.com/recipes/food/views/seared-scallops-with-brown-butter-and-lemon-pan-sauce"  ],
  ["Chocolate Zucchini Cake","https://www.epicurious.com/recipes/food/views/chocolate-zucchini-cake-907"  ],
  ["Our Favorite Macaroni and Cheese","https://www.epicurious.com/recipes/food/views/our-favorite-macaroni-and-cheese-51255890"  ],
  ["Bombay Rolls","https://www.epicurious.com/recipes/food/views/bombay-rolls-meera-sodha"  ],
  ["Stone Fruit Clafoutis","https://www.epicurious.com/recipes/food/views/stone-fruit-clafoutis"  ],
  ["Peruvian-Style Roast Chicken With Tangy Green Sauce","https://www.epicurious.com/recipes/food/views/peruvian-style-roast-chicken-with-tangy-green-sauce"  ],
  ["Molten Chocolate Chunk Brownies","https://www.epicurious.com/recipes/food/views/molten-chocolate-chunk-brownies"  ],
  ["Pumpkin Stuffed with Everything Good","https://www.epicurious.com/recipes/food/views/pumpkin-stuffed-with-everything-good-361169"  ],
  ["Quaker Vanishing Oatmeal Raisin Cookies","https://www.epicurious.com/recipes/food/views/quaker-vanishing-oatmeal-raisin-cookies"  ],
  ["Baked Ham","https://www.epicurious.com/recipes/food/views/baked-ham-360789"  ],
  ["Chocolate Mousse","https://www.epicurious.com/recipes/food/views/chocolate-mousse-107437"  ],
  ["Yogurt and Spice Roasted Salmon","https://www.epicurious.com/recipes/food/views/easy-yogurt-and-spice-roasted-salmon-sabrina-ghayour"  ],
  ["Peach Cobbler","https://www.epicurious.com/recipes/food/views/peach-cobbler-hot-water"  ],
  ["Our Favorite Key Lime Pie","https://www.epicurious.com/recipes/food/views/our-favorite-key-lime-pie-56389684"  ],
  ["My Homemade Potato Chips","https://www.epicurious.com/recipes/food/views/my-homemade-potato-chips-234557"  ],
  ["Panna Cotta","https://www.epicurious.com/recipes/food/views/panna-cotta-14224"  ],
  ["French's Green Bean Casserole","https://www.epicurious.com/recipes/food/views/frenchs-green-bean-casserole"  ],
  ["Flourless Chocolate Cake","https://www.epicurious.com/recipes/food/views/flourless-chocolate-cake-14478"  ],
  ["Chocolate–Peanut Butter Sheet Pan Ice Cream Sandwiches","https://www.epicurious.com/recipes/food/views/chocolate-peanut-butter-sheet-pan-ice-cream-sandwiches"  ],
  ["Golden Beet Cake With the Best Cream Cheese Frosting","https://www.epicurious.com/recipes/food/views/golden-beet-cake-best-cream-cheese-frosting"  ],
  ["Herb-Crusted Cauliflower Steaks With Beans and Tomatoes","https://www.epicurious.com/recipes/food/views/herb-crusted-cauliflower-steaks-with-beans-and-tomatoes"  ],
  ["Mochi Cake, Any Way You Want It","https://www.epicurious.com/recipes/food/views/mochi-cake-any-way-you-want-it"  ],
  ["Kale and Brussels Sprout Salad","https://www.epicurious.com/recipes/food/views/kale-brussels-sprout-salad-368295"  ],
  ["Cocoa Brioche Morning Buns","https://www.epicurious.com/recipes/food/views/cocoa-brioche-morning-buns"  ],
  ["Garlicky Instant Ramen Noodle Salad With Grilled Chicken Thighs","https://www.epicurious.com/recipes/food/views/garlicky-instant-ramen-noodle-salad-grilled-chicken-thighs"  ],
  ["Our Favorite Banana Bread","https://www.epicurious.com/recipes/food/views/our-favorite-banana-bread-56389378"  ],
  ["French 75","https://www.epicurious.com/recipes/food/views/french-75-242668"  ],
  ["Chicken Barbecue (Inihaw na Manok)","https://www.epicurious.com/recipes/food/views/filipino-chicken-barbecue-skewers-inihaw-na-manok"  ],
  ["Creamy Pasta With Crispy Mushrooms","https://www.epicurious.com/recipes/food/views/creamy-pasta-with-crispy-mushrooms"  ],
  ["Our Favorite Cinnamon Rolls","https://www.epicurious.com/recipes/food/views/our-favorite-cinnamon-rolls-51251020"  ],
  ["Fried Garlic Noodles","https://www.epicurious.com/recipes/food/views/fried-garlic-noodles-sheldon-simeon"  ],
  ["Roasted Garlic and Parmesan Baked Halibut","https://www.epicurious.com/recipes/food/views/roasted-garlic-and-parmesan-baked-halibut"  ],
  ["Basque-Style Sweet Potato Cheesecake","https://www.epicurious.com/recipes/food/views/basque-style-sweet-potato-cheesecake"  ],
  ["Chickpea-Potato Chaat","https://www.epicurious.com/recipes/food/views/chickpea-potato-chaat"  ],
  ["Smoky Spanish Potatoes and Eggs","https://www.epicurious.com/recipes/food/views/smoky-spanish-potatoes-and-eggs"  ],
  ["Microwave Coconut Sticky Rice With Mango","https://www.epicurious.com/recipes/food/views/microwave-coconut-sticky-rice-with-mango-teigen"  ],
  ["Crispy Chicken Over Turmeric-Lemon Cabbage and Peas","https://www.epicurious.com/recipes/food/views/crispy-chicken-turmeric-lemon-cabbage-peas"  ],
  ["Our Favorite Apple Pie","https://www.epicurious.com/recipes/food/views/our-favorite-apple-pie-51248690"  ],
  ["Double-the-Mustard Chicken With Potatoes and Greens","https://www.epicurious.com/recipes/food/views/honey-mustard-sheet-pan-chicken-dinner-with-potatoes-and-greens"  ],
  ["Sheet-Pan Brownie Thins","https://www.epicurious.com/recipes/food/views/sheet-pan-brownie-thins"  ],
  ["Tahini Chiffon Cake With Burnt Honey Cream and Poached Rhubarb","https://www.epicurious.com/recipes/food/views/tahini-chiffon-cake-rhubarb-jen-yee"  ],
  ["Best Deviled Eggs","https://www.epicurious.com/recipes/food/views/deviled-eggs-106562"  ],
  ["Pan-Roasted Swordfish Steaks With Mixed-Peppercorn Butter","https://www.epicurious.com/recipes/food/views/pan-roasted-swordfish-steaks-with-mixed-peppercorn-butter-232695"  ],
  ["Paper Plane Cocktail","https://www.epicurious.com/recipes/food/views/paper-plane-cocktail"  ],
  ["Steamed Whole Fish With Ginger, Scallions, and Soy","https://www.epicurious.com/recipes/food/views/steamed-whole-fish-with-ginger-scallions-and-soy-51115200"  ],
  ["Frozen Chocolate Bananas","https://www.epicurious.com/recipes/food/views/frozen-chocolate-bananas-240064"  ],
  ["Seafood Paella","https://www.epicurious.com/recipes/food/views/seafood-paella-366249"  ],
  ["Masa Pancakes","https://www.epicurious.com/recipes/food/views/masa-pancakes-alan-delgado"  ],
  ["Slow Cooker Pork Shoulder With Zesty Basil Sauce","https://www.epicurious.com/recipes/food/views/slow-cooker-pork-shoulder-with-zesty-basil-sauce"  ],
  ["Sonoran-Style Potato, Cheese, and Tomato Soup","https://www.epicurious.com/recipes/food/views/sonoran-style-potato-cheese-tomato-soup"  ],
  ["One-Skillet Chicken with Buttery Orzo","https://www.epicurious.com/recipes/food/views/one-skillet-baked-chicken-thighs-with-orzo-and-fennel"  ],
  ["Yeasted Beer Bread","https://www.epicurious.com/recipes/food/views/yeasted-beer-bread-roxana-jullapat"  ],
  ["Shortbread Cookies Four Ways","https://www.epicurious.com/recipes/food/views/tenderest-shortbread-four-ways"  ],
  ["The Perfect Flan","https://www.epicurious.com/recipes/food/views/the-perfect-flan-1902"  ],
  ["Strawberry Sorbet From The River Café","https://food52.com/recipes/12934-the-river-cafe-s-strawberry-sorbet"  ],
  ["Pasta With Silkiest Eggplant Sauce From Francis Lam","https://food52.com/recipes/86134-pasta-with-silkiest-eggplant-sauce-recipe-francis-lam"  ],
  ["Kristen’s Family Banana Bread","https://food52.com/recipes/86604-kristens-genius-family-banana-bread-recipe"  ],
  ["Meyer Lemon Rice With Candied Garlic From Michael W. Twitty","https://food52.com/recipes/85417-meyer-lemon-rice-with-candied-garlic-recipe"  ],
  ["Hot Chocolate & Halva Pudding From Benjamina Ebuehi","https://food52.com/recipes/85016-hot-chocolate-halva-pudding-recipe"  ],
  ["Perfectly Pillowy King Arthur Cinnamon Rolls","https://food52.com/recipes/85127-perfectly-pillowy-cinnamon-roll-recipe"  ],
  ["Fried Egg Salad From Ideas in Food","https://food52.com/recipes/84893-fried-egg-salad-recipe-from-ideas-in-food"  ],
  ["Mike’s Famous Fried Eggs","https://food52.com/recipes/86531-mikes-famous-fried-eggs-recipe"  ],
  ["Kiwi & Feta Salad From Nadiya Hussain","https://food52.com/recipes/86030-kiwi-feta-salad-recipe-from-nadiya-hussain"  ],
  ["Cardamom Cake From Niloufer Ichaporia King","https://food52.com/recipes/85494-cardamom-cake-recipe-niloufer-ichaporia-king"  ],
  ["Magical Whole-Grain Pancakes From Josey Baker","https://food52.com/recipes/85785-whole-grain-pancakes-recipe"  ]
]



var comments = ['This sounds good!', 'What about this?', 'I need to try this one!', 'Eh, I\'d look for another one..']

// function newDish() {
//   var randomNumber = Math.floor(Math.random() * (dishes.length));
//   index_dishes = dishes[randomNumber];
//   document.getElementById('dishDisplay').innerHTML = index_dishes[0];
//   document.getElementById('linkDisplay').innerHTML = index_dishes[1];
// }

function newDish() {
  var randomNumber = Math.floor(Math.random() * (dishes.length));
  var randomNumber1 = Math.floor(Math.random() * (comments.length));
  index_dishes = dishes[randomNumber];
  index_comments = comments[randomNumber1];
  document.getElementById('commentDisplay').innerHTML = index_comments;
  let text = index_dishes[0];
  let links = text.link(index_dishes[1]);
  document.getElementById('dishDisplay').innerHTML = links;
}


var dishes_by_nation = [
  {
    "Country": "Afghanistan",
    "Dishes": "Kabuli palaw",
    "Dish_Normalized": "Kabuli palaw",
    "Links": "https://www.google.com/search?q=+Kabuli+palaw+Afghanistan",
    "Flag": "🇦🇫"
  },
  {
    "Country": "Albania",
    "Dishes": "Tavë kosi",
    "Dish_Normalized": "Tave kosi",
    "Links": "https://www.google.com/search?q=+Tave+kosi+Albania",
    "Flag": "🇦🇱"
  },
  {
    "Country": "Albania",
    "Dishes": "Flia",
    "Dish_Normalized": "Flia",
    "Links": "https://www.google.com/search?q=+Flia+Albania",
    "Flag": "🇦🇱"
  },
  {
    "Country": "Algeria",
    "Dishes": "Couscous",
    "Dish_Normalized": "Couscous",
    "Links": "https://www.google.com/search?q=+Couscous+Algeria",
    "Flag": "🇩🇿"
  },
  {
    "Country": "Andorra",
    "Dishes": "Escudella i carn d'olla",
    "Dish_Normalized": "Escudella i carn d'olla",
    "Links": "https://www.google.com/search?q=+Escudella+i+carn+d'olla+Andorra",
    "Flag": "🇦🇩"
  },
  {
    "Country": "Angola",
    "Dishes": "Moamba de galinha",
    "Dish_Normalized": "Moamba de galinha",
    "Links": "https://www.google.com/search?q=+Moamba+de+galinha+Angola",
    "Flag": "🇦🇴"
  },
  {
    "Country": "Argentina",
    "Dishes": "Asado",
    "Dish_Normalized": "Asado",
    "Links": "https://www.google.com/search?q=+Asado+Argentina",
    "Flag": "🇦🇷"
  },
  {
    "Country": "Argentina",
    "Dishes": "empanada",
    "Dish_Normalized": "empanada",
    "Links": "https://www.google.com/search?q=+empanada+Argentina",
    "Flag": "🇦🇷"
  },
  {
    "Country": "Argentina",
    "Dishes": "matambre",
    "Dish_Normalized": "matambre",
    "Links": "https://www.google.com/search?q=+matambre+Argentina",
    "Flag": "🇦🇷"
  },
  {
    "Country": "Argentina",
    "Dishes": "locro",
    "Dish_Normalized": "locro",
    "Links": "https://www.google.com/search?q=+locro+Argentina",
    "Flag": "🇦🇷"
  },
  {
    "Country": "Armenia",
    "Dishes": "Harisa",
    "Dish_Normalized": "Harisa",
    "Links": "https://www.google.com/search?q=+Harisa+Armenia",
    "Flag": "🇦🇲"
  },
  {
    "Country": "Australia",
    "Dishes": "Roast lamb",
    "Dish_Normalized": "Roast lamb",
    "Links": "https://www.google.com/search?q=+Roast+lamb+Australia",
    "Flag": "🇦🇺"
  },
  {
    "Country": "Australia",
    "Dishes": "meat pie",
    "Dish_Normalized": "meat pie",
    "Links": "https://www.google.com/search?q=+meat+pie+Australia",
    "Flag": "🇦🇺"
  },
  {
    "Country": "Australia",
    "Dishes": "pavlova",
    "Dish_Normalized": "pavlova",
    "Links": "https://www.google.com/search?q=+pavlova+Australia",
    "Flag": "🇦🇺"
  },
  {
    "Country": "Australia",
    "Dishes": "Vegemite on toast",
    "Dish_Normalized": "Vegemite on toast",
    "Links": "https://www.google.com/search?q=+Vegemite+on+toast+Australia",
    "Flag": "🇦🇺"
  },
  {
    "Country": "Austria",
    "Dishes": "Wiener schnitzel",
    "Dish_Normalized": "Wiener schnitzel",
    "Links": "https://www.google.com/search?q=+Wiener+schnitzel+Austria",
    "Flag": "🇦🇹"
  },
  {
    "Country": "Azerbaijan",
    "Dishes": "Dolma",
    "Dish_Normalized": "Dolma",
    "Links": "https://www.google.com/search?q=+Dolma+Azerbaijan",
    "Flag": "🇦🇿"
  },
  {
    "Country": "Bahamas",
    "Dishes": "Crack conch with peas and rice",
    "Dish_Normalized": "Crack conch with peas and rice",
    "Links": "https://www.google.com/search?q=+Crack+conch+with+peas+and+rice+Bahamas",
    "Flag": "🇧🇸"
  },
  {
    "Country": "Bahrain",
    "Dishes": "Kabsa",
    "Dish_Normalized": "Kabsa",
    "Links": "https://www.google.com/search?q=+Kabsa+Bahrain",
    "Flag": "🇧🇭"
  },
  {
    "Country": "Bangladesh",
    "Dishes": "Rice and fish (particularly ilish)",
    "Dish_Normalized": "Rice and fish (particularly ilish)",
    "Links": "https://www.google.com/search?q=+Rice+and+fish+(particularly+ilish)+Bangladesh",
    "Flag": "🇧🇩"
  },
  {
    "Country": "Barbados",
    "Dishes": "Cou-cou and flying fish",
    "Dish_Normalized": "Cou-cou and flying fish",
    "Links": "https://www.google.com/search?q=+Cou-cou+and+flying+fish+Barbados",
    "Flag": "🇧🇧"
  },
  {
    "Country": "Belarus",
    "Dishes": "Draniki",
    "Dish_Normalized": "Draniki",
    "Links": "https://www.google.com/search?q=+Draniki+Belarus",
    "Flag": "🇧🇾"
  },
  {
    "Country": "Belgium",
    "Dishes": "Frites (particularly served with mussels or steak)",
    "Dish_Normalized": "Frites (particularly served with mussels or steak)",
    "Links": "https://www.google.com/search?q=+Frites+(particularly+served+with+mussels+or+steak)+Belgium",
    "Flag": "🇧🇪"
  },
  {
    "Country": "Belgium",
    "Dishes": "carbonade flamande",
    "Dish_Normalized": "carbonade flamande",
    "Links": "https://www.google.com/search?q=+carbonade+flamande+Belgium",
    "Flag": "🇧🇪"
  },
  {
    "Country": "Belgium",
    "Dishes": "Waterzooi",
    "Dish_Normalized": "Waterzooi",
    "Links": "https://www.google.com/search?q=+Waterzooi+Belgium",
    "Flag": "🇧🇪"
  },
  {
    "Country": "Belgium",
    "Dishes": "chocolate mousse",
    "Dish_Normalized": "chocolate mousse",
    "Links": "https://www.google.com/search?q=+chocolate+mousse+Belgium",
    "Flag": "🇧🇪"
  },
  {
    "Country": "Bhutan",
    "Dishes": "Ema datshi",
    "Dish_Normalized": "Ema datshi",
    "Links": "https://www.google.com/search?q=+Ema+datshi+Bhutan",
    "Flag": "🇧🇹"
  },
  {
    "Country": "Bolivia",
    "Dishes": "Salteñas",
    "Dish_Normalized": "Saltenas",
    "Links": "https://www.google.com/search?q=+Saltenas+Bolivia",
    "Flag": "🇧🇴"
  },
  {
    "Country": "Bosnia and Herzegovina",
    "Dishes": "Bosnian pot",
    "Dish_Normalized": "Bosnian pot",
    "Links": "https://www.google.com/search?q=+Bosnian+pot+Bosnia and Herzegovina",
    "Flag": "🇧🇦"
  },
  {
    "Country": "Bosnia and Herzegovina",
    "Dishes": "Ćevapi",
    "Dish_Normalized": "Cevapi",
    "Links": "https://www.google.com/search?q=+Cevapi+Bosnia and Herzegovina",
    "Flag": "🇧🇦"
  },
  {
    "Country": "Botswana",
    "Dishes": "Seswaa",
    "Dish_Normalized": "Seswaa",
    "Links": "https://www.google.com/search?q=+Seswaa+Botswana",
    "Flag": "🇧🇼"
  },
  {
    "Country": "Brazil",
    "Dishes": "Feijoada",
    "Dish_Normalized": "Feijoada",
    "Links": "https://www.google.com/search?q=+Feijoada+Brazil",
    "Flag": "🇧🇷"
  },
  {
    "Country": "Brunei",
    "Dishes": "Ambuyat",
    "Dish_Normalized": "Ambuyat",
    "Links": "https://www.google.com/search?q=+Ambuyat+Brunei",
    "Flag": "🇧🇳"
  },
  {
    "Country": "Bulgaria",
    "Dishes": "Shopska salad",
    "Dish_Normalized": "Shopska salad",
    "Links": "https://www.google.com/search?q=+Shopska+salad+Bulgaria",
    "Flag": "🇧🇬"
  },
  {
    "Country": "Burundi",
    "Dishes": "Boko Boko",
    "Dish_Normalized": "Boko Boko",
    "Links": "https://www.google.com/search?q=+Boko+Boko+Burundi",
    "Flag": "🇧🇮"
  },
  {
    "Country": "Cambodia",
    "Dishes": "Fish amok",
    "Dish_Normalized": "Fish amok",
    "Links": "https://www.google.com/search?q=+Fish+amok+Cambodia",
    "Flag": "🇰🇭"
  },
  {
    "Country": "Cambodia",
    "Dishes": "num banhchok",
    "Dish_Normalized": "num banhchok",
    "Links": "https://www.google.com/search?q=+num+banhchok+Cambodia",
    "Flag": "🇰🇭"
  },
  {
    "Country": "Cambodia",
    "Dishes": "samlar kako",
    "Dish_Normalized": "samlar kako",
    "Links": "https://www.google.com/search?q=+samlar+kako+Cambodia",
    "Flag": "🇰🇭"
  },
  {
    "Country": "Cameroon",
    "Dishes": "Ndole",
    "Dish_Normalized": "Ndole",
    "Links": "https://www.google.com/search?q=+Ndole+Cameroon",
    "Flag": "🇨🇲"
  },
  {
    "Country": "Canada",
    "Dishes": "Poutine",
    "Dish_Normalized": "Poutine",
    "Links": "https://www.google.com/search?q=+Poutine+Canada",
    "Flag": "🇨🇦"
  },
  {
    "Country": "Canada",
    "Dishes": "Kraft Dinner",
    "Dish_Normalized": "Kraft Dinner",
    "Links": "https://www.google.com/search?q=+Kraft+Dinner+Canada",
    "Flag": "🇨🇦"
  },
  {
    "Country": "Canada",
    "Dishes": "Nanaimo bar",
    "Dish_Normalized": "Nanaimo bar",
    "Links": "https://www.google.com/search?q=+Nanaimo+bar+Canada",
    "Flag": "🇨🇦"
  },
  {
    "Country": "Canada",
    "Dishes": "Butter tarts",
    "Dish_Normalized": "Butter tarts",
    "Links": "https://www.google.com/search?q=+Butter+tarts+Canada",
    "Flag": "🇨🇦"
  },
  {
    "Country": "Chile",
    "Dishes": "Empanada",
    "Dish_Normalized": "Empanada",
    "Links": "https://www.google.com/search?q=+Empanada+Chile",
    "Flag": "🇨🇱"
  },
  {
    "Country": "Chile",
    "Dishes": "Pastel de choclo",
    "Dish_Normalized": "Pastel de choclo",
    "Links": "https://www.google.com/search?q=+Pastel+de+choclo+Chile",
    "Flag": "🇨🇱"
  },
  {
    "Country": "China",
    "Dishes": "Peking duck",
    "Dish_Normalized": "Peking duck",
    "Links": "https://www.google.com/search?q=+Peking+duck+China",
    "Flag": "🇨🇳"
  },
  {
    "Country": "China",
    "Dishes": "luosifen",
    "Dish_Normalized": "luosifen",
    "Links": "https://www.google.com/search?q=+luosifen+China",
    "Flag": "🇨🇳"
  },
  {
    "Country": "China",
    "Dishes": "crayfish Hot pot",
    "Dish_Normalized": "crayfish Hot pot",
    "Links": "https://www.google.com/search?q=+crayfish+Hot+pot+China",
    "Flag": "🇨🇳"
  },
  {
    "Country": "China",
    "Dishes": "dumpling",
    "Dish_Normalized": "dumpling",
    "Links": "https://www.google.com/search?q=+dumpling+China",
    "Flag": "🇨🇳"
  },
  {
    "Country": "China",
    "Dishes": "malaxiangguo",
    "Dish_Normalized": "malaxiangguo",
    "Links": "https://www.google.com/search?q=+malaxiangguo+China",
    "Flag": "🇨🇳"
  },
  {
    "Country": "China",
    "Dishes": "Dim sum",
    "Dish_Normalized": "Dim sum",
    "Links": "https://www.google.com/search?q=+Dim+sum+China",
    "Flag": "🇨🇳"
  },
  {
    "Country": "China",
    "Dishes": "Kaolengmian",
    "Dish_Normalized": "Kaolengmian",
    "Links": "https://www.google.com/search?q=+Kaolengmian+China",
    "Flag": "🇨🇳"
  },
  {
    "Country": "China",
    "Dishes": "Tanghulu",
    "Dish_Normalized": "Tanghulu",
    "Links": "https://www.google.com/search?q=+Tanghulu+China",
    "Flag": "🇨🇳"
  },
  {
    "Country": "Colombia",
    "Dishes": "Ajiaco",
    "Dish_Normalized": "Ajiaco",
    "Links": "https://www.google.com/search?q=+Ajiaco+Colombia",
    "Flag": "🇨🇴"
  },
  {
    "Country": "Colombia",
    "Dishes": "arepa Bandeja paisa",
    "Dish_Normalized": "arepa Bandeja paisa",
    "Links": "https://www.google.com/search?q=+arepa+Bandeja+paisa+Colombia",
    "Flag": "🇨🇴"
  },
  {
    "Country": "Comoros",
    "Dishes": "Langouste a la vanille",
    "Dish_Normalized": "Langouste a la vanille",
    "Links": "https://www.google.com/search?q=+Langouste+a+la+vanille+Comoros",
    "Flag": "🇰🇲"
  },
  {
    "Country": "Republic of the Congo",
    "Dishes": "Poulet Moambé",
    "Dish_Normalized": "Poulet Moambe",
    "Links": "https://www.google.com/search?q=+Poulet+Moambe+Republic of the Congo",
    "Flag": "🇨🇬"
  },
  {
    "Country": "Costa Rica",
    "Dishes": "Gallo Pinto",
    "Dish_Normalized": "Gallo Pinto",
    "Links": "https://www.google.com/search?q=+Gallo+Pinto+Costa Rica",
    "Flag": "🇨🇷"
  },
  {
    "Country": "Croatia",
    "Dishes": "Zagorski štrukli",
    "Dish_Normalized": "Zagorski strukli",
    "Links": "https://www.google.com/search?q=+Zagorski+strukli+Croatia",
    "Flag": "🇭🇷"
  },
  {
    "Country": "Cuba",
    "Dishes": "Ropa vieja",
    "Dish_Normalized": "Ropa vieja",
    "Links": "https://www.google.com/search?q=+Ropa+vieja+Cuba",
    "Flag": "🇨🇺"
  },
  {
    "Country": "Cyprus",
    "Dishes": "Souvla",
    "Dish_Normalized": "Souvla",
    "Links": "https://www.google.com/search?q=+Souvla+Cyprus",
    "Flag": "🇨🇾"
  },
  {
    "Country": "Cyprus",
    "Dishes": "Kleftiko",
    "Dish_Normalized": "Kleftiko",
    "Links": "https://www.google.com/search?q=+Kleftiko+Cyprus",
    "Flag": "🇨🇾"
  },
  {
    "Country": "Cyprus",
    "Dishes": "Trachanás",
    "Dish_Normalized": "Trachanas",
    "Links": "https://www.google.com/search?q=+Trachanas+Cyprus",
    "Flag": "🇨🇾"
  },
  {
    "Country": "Denmark",
    "Dishes": "Stegt Flæsk",
    "Dish_Normalized": "Stegt Flsk",
    "Links": "https://www.google.com/search?q=+Stegt+Flsk+Denmark",
    "Flag": "🇩🇰"
  },
  {
    "Country": "Denmark",
    "Dishes": "Smørrebrød",
    "Dish_Normalized": "Smrrebrd",
    "Links": "https://www.google.com/search?q=+Smrrebrd+Denmark",
    "Flag": "🇩🇰"
  },
  {
    "Country": "Dominica",
    "Dishes": "Mountain chicken (historical)",
    "Dish_Normalized": "Mountain chicken (historical)",
    "Links": "https://www.google.com/search?q=+Mountain+chicken+(historical)+Dominica",
    "Flag": "🇩🇲"
  },
  {
    "Country": "Dominica",
    "Dishes": "Callaloo",
    "Dish_Normalized": "Callaloo",
    "Links": "https://www.google.com/search?q=+Callaloo+Dominica",
    "Flag": "🇩🇲"
  },
  {
    "Country": "Dominican Republic",
    "Dishes": "La bandera (rice",
    "Dish_Normalized": "La bandera (rice",
    "Links": "https://www.google.com/search?q=+La+bandera+(rice+Dominican Republic",
    "Flag": "🇩🇴"
  },
  {
    "Country": "Dominican Republic",
    "Dishes": "beans and meat)",
    "Dish_Normalized": "beans and meat)",
    "Links": "https://www.google.com/search?q=+beans+and+meat)+Dominican Republic",
    "Flag": "🇩🇴"
  },
  {
    "Country": "Ecuador",
    "Dishes": "Encebollado",
    "Dish_Normalized": "Encebollado",
    "Links": "https://www.google.com/search?q=+Encebollado+Ecuador",
    "Flag": "🇪🇨"
  },
  {
    "Country": "Ecuador",
    "Dishes": "Guatitas",
    "Dish_Normalized": "Guatitas",
    "Links": "https://www.google.com/search?q=+Guatitas+Ecuador",
    "Flag": "🇪🇨"
  },
  {
    "Country": "Egypt",
    "Dishes": "Ful medames",
    "Dish_Normalized": "Ful medames",
    "Links": "https://www.google.com/search?q=+Ful+medames+Egypt",
    "Flag": "🇪🇬"
  },
  {
    "Country": "Egypt",
    "Dishes": "kushari",
    "Dish_Normalized": "kushari",
    "Links": "https://www.google.com/search?q=+kushari+Egypt",
    "Flag": "🇪🇬"
  },
  {
    "Country": "Egypt",
    "Dishes": "molokhiya",
    "Dish_Normalized": "molokhiya",
    "Links": "https://www.google.com/search?q=+molokhiya+Egypt",
    "Flag": "🇪🇬"
  },
  {
    "Country": "Egypt",
    "Dishes": "taʿamiya",
    "Dish_Normalized": "taamiya",
    "Links": "https://www.google.com/search?q=+taamiya+Egypt",
    "Flag": "🇪🇬"
  },
  {
    "Country": "El Salvador",
    "Dishes": "Pupusa",
    "Dish_Normalized": "Pupusa",
    "Links": "https://www.google.com/search?q=+Pupusa+El Salvador",
    "Flag": "🇸🇻"
  },
  {
    "Country": "Eritrea",
    "Dishes": "Zigini with injera",
    "Dish_Normalized": "Zigini with injera",
    "Links": "https://www.google.com/search?q=+Zigini+with+injera+Eritrea",
    "Flag": "🇪🇷"
  },
  {
    "Country": "Ethiopia",
    "Dishes": "Doro wat with injera",
    "Dish_Normalized": "Doro wat with injera",
    "Links": "https://www.google.com/search?q=+Doro+wat+with+injera+Ethiopia",
    "Flag": "🇪🇹"
  },
  {
    "Country": "Fiji",
    "Dishes": "Fiji Kokoda",
    "Dish_Normalized": "Fiji Kokoda",
    "Links": "https://www.google.com/search?q=+Fiji+Kokoda+Fiji",
    "Flag": "🇫🇯"
  },
  {
    "Country": "Finland",
    "Dishes": "Karjalanpaisti",
    "Dish_Normalized": "Karjalanpaisti",
    "Links": "https://www.google.com/search?q=+Karjalanpaisti+Finland",
    "Flag": "🇫🇮"
  },
  {
    "Country": "Finland",
    "Dishes": "rye bread",
    "Dish_Normalized": "rye bread",
    "Links": "https://www.google.com/search?q=+rye+bread+Finland",
    "Flag": "🇫🇮"
  },
  {
    "Country": "France",
    "Dishes": "Pot-au-feu",
    "Dish_Normalized": "Pot-au-feu",
    "Links": "https://www.google.com/search?q=+Pot-au-feu+France",
    "Flag": "🇫🇷"
  },
  {
    "Country": "France",
    "Dishes": "Beef bourguignon",
    "Dish_Normalized": "Beef bourguignon",
    "Links": "https://www.google.com/search?q=+Beef+bourguignon+France",
    "Flag": "🇫🇷"
  },
  {
    "Country": "France",
    "Dishes": "Blanquette de veau",
    "Dish_Normalized": "Blanquette de veau",
    "Links": "https://www.google.com/search?q=+Blanquette+de+veau+France",
    "Flag": "🇫🇷"
  },
  {
    "Country": "France",
    "Dishes": "Steak frites",
    "Dish_Normalized": "Steak frites",
    "Links": "https://www.google.com/search?q=+Steak+frites+France",
    "Flag": "🇫🇷"
  },
  {
    "Country": "France",
    "Dishes": "Baguette",
    "Dish_Normalized": "Baguette",
    "Links": "https://www.google.com/search?q=+Baguette+France",
    "Flag": "🇫🇷"
  },
  {
    "Country": "France",
    "Dishes": "Crêpe",
    "Dish_Normalized": "Crepe",
    "Links": "https://www.google.com/search?q=+Crepe+France",
    "Flag": "🇫🇷"
  },
  {
    "Country": "France",
    "Dishes": "Crème caramel",
    "Dish_Normalized": "Creme caramel",
    "Links": "https://www.google.com/search?q=+Creme+caramel+France",
    "Flag": "🇫🇷"
  },
  {
    "Country": "France",
    "Dishes": "Poulet au pot (historical)",
    "Dish_Normalized": "Poulet au pot (historical)",
    "Links": "https://www.google.com/search?q=+Poulet+au+pot+(historical)++France",
    "Flag": "🇫🇷"
  },
  {
    "Country": "Gabon",
    "Dishes": "Poulet Nyembwe",
    "Dish_Normalized": "Poulet Nyembwe",
    "Links": "https://www.google.com/search?q=+Poulet+Nyembwe+Gabon",
    "Flag": "🇬🇦"
  },
  {
    "Country": "Georgia",
    "Dishes": "Khachapuri",
    "Dish_Normalized": "Khachapuri",
    "Links": "https://www.google.com/search?q=+Khachapuri+Georgia",
    "Flag": "🇬🇪"
  },
  {
    "Country": "Germany",
    "Dishes": "Schnitzel",
    "Dish_Normalized": "Schnitzel",
    "Links": "https://www.google.com/search?q=+Schnitzel+Germany",
    "Flag": "🇩🇪"
  },
  {
    "Country": "Germany",
    "Dishes": "Schweinshaxe",
    "Dish_Normalized": "Schweinshaxe",
    "Links": "https://www.google.com/search?q=+Schweinshaxe+Germany",
    "Flag": "🇩🇪"
  },
  {
    "Country": "Germany",
    "Dishes": "Bratwurst",
    "Dish_Normalized": "Bratwurst",
    "Links": "https://www.google.com/search?q=+Bratwurst+Germany",
    "Flag": "🇩🇪"
  },
  {
    "Country": "Germany",
    "Dishes": "Sauerbraten",
    "Dish_Normalized": "Sauerbraten",
    "Links": "https://www.google.com/search?q=+Sauerbraten+Germany",
    "Flag": "🇩🇪"
  },
  {
    "Country": "Germany",
    "Dishes": "Döner kebab",
    "Dish_Normalized": "Doner kebab",
    "Links": "https://www.google.com/search?q=+Doner+kebab+Germany",
    "Flag": "🇩🇪"
  },
  {
    "Country": "Germany",
    "Dishes": "Currywurst",
    "Dish_Normalized": "Currywurst",
    "Links": "https://www.google.com/search?q=+Currywurst+Germany",
    "Flag": "🇩🇪"
  },
  {
    "Country": "Germany",
    "Dishes": "Eisbein with sauerkraut",
    "Dish_Normalized": "Eisbein with sauerkraut",
    "Links": "https://www.google.com/search?q=+Eisbein+with+sauerkraut+Germany",
    "Flag": "🇩🇪"
  },
  {
    "Country": "Greece",
    "Dishes": "Horiatiki",
    "Dish_Normalized": "Horiatiki",
    "Links": "https://www.google.com/search?q=+Horiatiki+Greece",
    "Flag": "🇬🇷"
  },
  {
    "Country": "Greece",
    "Dishes": "Moussaka",
    "Dish_Normalized": "Moussaka",
    "Links": "https://www.google.com/search?q=+Moussaka+Greece",
    "Flag": "🇬🇷"
  },
  {
    "Country": "Greece",
    "Dishes": "Fasolada Souvlaki",
    "Dish_Normalized": "Fasolada Souvlaki",
    "Links": "https://www.google.com/search?q=+Fasolada+Souvlaki+Greece",
    "Flag": "🇬🇷"
  },
  {
    "Country": "Greece",
    "Dishes": "Gyro",
    "Dish_Normalized": "Gyro",
    "Links": "https://www.google.com/search?q=+Gyro+Greece",
    "Flag": "🇬🇷"
  },
  {
    "Country": "Greece",
    "Dishes": "Magiritsa",
    "Dish_Normalized": "Magiritsa",
    "Links": "https://www.google.com/search?q=+Magiritsa+Greece",
    "Flag": "🇬🇷"
  },
  {
    "Country": "Greece",
    "Dishes": "Kokoretsi",
    "Dish_Normalized": "Kokoretsi",
    "Links": "https://www.google.com/search?q=+Kokoretsi+Greece",
    "Flag": "🇬🇷"
  },
  {
    "Country": "Grenada",
    "Dishes": "Oil down",
    "Dish_Normalized": "Oil down",
    "Links": "https://www.google.com/search?q=+Oil+down+Grenada",
    "Flag": "🇬🇩"
  },
  {
    "Country": "Guyana",
    "Dishes": "Pepperpot and Chicken curry",
    "Dish_Normalized": "Pepperpot and Chicken curry",
    "Links": "https://www.google.com/search?q=+Pepperpot+and+Chicken+curry+Guyana",
    "Flag": "🇬🇾"
  },
  {
    "Country": "Haiti",
    "Dishes": "Griot (food)",
    "Dish_Normalized": "Griot (food)",
    "Links": "https://www.google.com/search?q=+Griot+(food)+Haiti",
    "Flag": "🇭🇹"
  },
  {
    "Country": "Hungary",
    "Dishes": "Gulyás",
    "Dish_Normalized": "Gulyas",
    "Links": "https://www.google.com/search?q=+Gulyas+Hungary",
    "Flag": "🇭🇺"
  },
  {
    "Country": "Iceland",
    "Dishes": "Lamb",
    "Dish_Normalized": "Lamb",
    "Links": "https://www.google.com/search?q=+Lamb+Iceland",
    "Flag": "🇮🇸"
  },
  {
    "Country": "Iceland",
    "Dishes": "Hákarl",
    "Dish_Normalized": "Hakarl",
    "Links": "https://www.google.com/search?q=+Hakarl+Iceland",
    "Flag": "🇮🇸"
  },
  {
    "Country": "Indonesia",
    "Dishes": "Nasi goreng",
    "Dish_Normalized": "Nasi goreng",
    "Links": "https://www.google.com/search?q=+Nasi+goreng+Indonesia",
    "Flag": "🇮🇩"
  },
  {
    "Country": "Indonesia",
    "Dishes": "Tumpeng",
    "Dish_Normalized": "Tumpeng",
    "Links": "https://www.google.com/search?q=+Tumpeng+Indonesia",
    "Flag": "🇮🇩"
  },
  {
    "Country": "Indonesia",
    "Dishes": "Satay",
    "Dish_Normalized": "Satay",
    "Links": "https://www.google.com/search?q=+Satay+Indonesia",
    "Flag": "🇮🇩"
  },
  {
    "Country": "Indonesia",
    "Dishes": "Soto",
    "Dish_Normalized": "Soto",
    "Links": "https://www.google.com/search?q=+Soto+Indonesia",
    "Flag": "🇮🇩"
  },
  {
    "Country": "Indonesia",
    "Dishes": "Rendang",
    "Dish_Normalized": "Rendang",
    "Links": "https://www.google.com/search?q=+Rendang+Indonesia",
    "Flag": "🇮🇩"
  },
  {
    "Country": "Indonesia",
    "Dishes": "Gado gado",
    "Dish_Normalized": "Gado gado",
    "Links": "https://www.google.com/search?q=+Gado+gado+Indonesia",
    "Flag": "🇮🇩"
  },
  {
    "Country": "Iran",
    "Dishes": "Abgoosht",
    "Dish_Normalized": "Abgoosht",
    "Links": "https://www.google.com/search?q=+Abgoosht+Iran",
    "Flag": "🇮🇷"
  },
  {
    "Country": "Iran",
    "Dishes": "Chelo kabab",
    "Dish_Normalized": "Chelo kabab",
    "Links": "https://www.google.com/search?q=+Chelo+kabab+Iran",
    "Flag": "🇮🇷"
  },
  {
    "Country": "Iran",
    "Dishes": "Ghormeh sabzi Fesenjan",
    "Dish_Normalized": "Ghormeh sabzi Fesenjan",
    "Links": "https://www.google.com/search?q=+Ghormeh+sabzi+Fesenjan+Iran",
    "Flag": "🇮🇷"
  },
  {
    "Country": "Iraq",
    "Dishes": "Masgouf",
    "Dish_Normalized": "Masgouf",
    "Links": "https://www.google.com/search?q=+Masgouf+Iraq",
    "Flag": "🇮🇶"
  },
  {
    "Country": "Ireland",
    "Dishes": "Breakfast roll",
    "Dish_Normalized": "Breakfast roll",
    "Links": "https://www.google.com/search?q=+Breakfast+roll+Ireland",
    "Flag": "🇮🇪"
  },
  {
    "Country": "Ireland",
    "Dishes": "Irish stew",
    "Dish_Normalized": "Irish stew",
    "Links": "https://www.google.com/search?q=+Irish+stew+Ireland",
    "Flag": "🇮🇪"
  },
  {
    "Country": "Israel",
    "Dishes": "Falafel (served in pita)",
    "Dish_Normalized": "Falafel (served in pita)",
    "Links": "https://www.google.com/search?q=+Falafel+(served+in+pita)+Israel",
    "Flag": "🇮🇱"
  },
  {
    "Country": "Israel",
    "Dishes": "Israeli salad",
    "Dish_Normalized": "Israeli salad",
    "Links": "https://www.google.com/search?q=+Israeli+salad+Israel",
    "Flag": "🇮🇱"
  },
  {
    "Country": "Israel",
    "Dishes": "Shakshouka",
    "Dish_Normalized": "Shakshouka",
    "Links": "https://www.google.com/search?q=+Shakshouka+Israel",
    "Flag": "🇮🇱"
  },
  {
    "Country": "Israel",
    "Dishes": "Meorav Yerushalmi",
    "Dish_Normalized": "Meorav Yerushalmi",
    "Links": "https://www.google.com/search?q=+Meorav+Yerushalmi+Israel",
    "Flag": "🇮🇱"
  },
  {
    "Country": "Italy",
    "Dishes": "Pasta",
    "Dish_Normalized": "Pasta",
    "Links": "https://www.google.com/search?q=+Pasta+Italy",
    "Flag": "🇮🇹"
  },
  {
    "Country": "Italy",
    "Dishes": "pizza",
    "Dish_Normalized": "pizza",
    "Links": "https://www.google.com/search?q=+pizza+Italy",
    "Flag": "🇮🇹"
  },
  {
    "Country": "Jamaica",
    "Dishes": "Ackee and Saltfish",
    "Dish_Normalized": "Ackee and Saltfish",
    "Links": "https://www.google.com/search?q=+Ackee+and+Saltfish+Jamaica",
    "Flag": "🇯🇲"
  },
  {
    "Country": "Jamaica",
    "Dishes": "Jerk chicken",
    "Dish_Normalized": "Jerk chicken",
    "Links": "https://www.google.com/search?q=+Jerk+chicken+Jamaica",
    "Flag": "🇯🇲"
  },
  {
    "Country": "Japan",
    "Dishes": "Sushi",
    "Dish_Normalized": "Sushi",
    "Links": "https://www.google.com/search?q=+Sushi+Japan",
    "Flag": "🇯🇵"
  },
  {
    "Country": "Japan",
    "Dishes": "Japanese curry",
    "Dish_Normalized": "Japanese curry",
    "Links": "https://www.google.com/search?q=+Japanese+curry+Japan",
    "Flag": "🇯🇵"
  },
  {
    "Country": "Japan",
    "Dishes": "Ramen",
    "Dish_Normalized": "Ramen",
    "Links": "https://www.google.com/search?q=+Ramen+Japan",
    "Flag": "🇯🇵"
  },
  {
    "Country": "Japan",
    "Dishes": "Tempura",
    "Dish_Normalized": "Tempura",
    "Links": "https://www.google.com/search?q=+Tempura+Japan",
    "Flag": "🇯🇵"
  },
  {
    "Country": "Japan",
    "Dishes": "Wagashi",
    "Dish_Normalized": "Wagashi",
    "Links": "https://www.google.com/search?q=+Wagashi+Japan",
    "Flag": "🇯🇵"
  },
  {
    "Country": "Jordan",
    "Dishes": "Mansaf",
    "Dish_Normalized": "Mansaf",
    "Links": "https://www.google.com/search?q=+Mansaf+Jordan",
    "Flag": "🇯🇴"
  },
  {
    "Country": "Kazakhstan",
    "Dishes": "Beshbarmak",
    "Dish_Normalized": "Beshbarmak",
    "Links": "https://www.google.com/search?q=+Beshbarmak+Kazakhstan",
    "Flag": "🇰🇿"
  },
  {
    "Country": "Kenya",
    "Dishes": "Ugali with sukuma wiki",
    "Dish_Normalized": "Ugali with sukuma wiki",
    "Links": "https://www.google.com/search?q=+Ugali+with+sukuma+wiki+Kenya",
    "Flag": "🇰🇪"
  },
  {
    "Country": "Kenya",
    "Dishes": "Githeri",
    "Dish_Normalized": "Githeri",
    "Links": "https://www.google.com/search?q=+Githeri+Kenya",
    "Flag": "🇰🇪"
  },
  {
    "Country": "Kenya",
    "Dishes": "chapati",
    "Dish_Normalized": "chapati",
    "Links": "https://www.google.com/search?q=+chapati+Kenya",
    "Flag": "🇰🇪"
  },
  {
    "Country": "Kenya",
    "Dishes": "nyama choma",
    "Dish_Normalized": "nyama choma",
    "Links": "https://www.google.com/search?q=+nyama+choma+Kenya",
    "Flag": "🇰🇪"
  },
  {
    "Country": "Kosovo",
    "Dishes": "Flia",
    "Dish_Normalized": "Flia",
    "Links": "https://www.google.com/search?q=+Flia+Kosovo",
    "Flag": "🇽🇰"
  },
  {
    "Country": "Kyrgyzstan",
    "Dishes": "Beshbarmak",
    "Dish_Normalized": "Beshbarmak",
    "Links": "https://www.google.com/search?q=+Beshbarmak+Kyrgyzstan",
    "Flag": "🇰🇬"
  },
  {
    "Country": "Laos",
    "Dishes": "Larb/Laap",
    "Dish_Normalized": "Larb/Laap",
    "Links": "https://www.google.com/search?q=+Larb/Laap+Laos",
    "Flag": "🇱🇦"
  },
  {
    "Country": "Laos",
    "Dishes": "sticky rice",
    "Dish_Normalized": "sticky rice",
    "Links": "https://www.google.com/search?q=+sticky+rice+Laos",
    "Flag": "🇱🇦"
  },
  {
    "Country": "Laos",
    "Dishes": "Tam Mak Hoong",
    "Dish_Normalized": "Tam Mak Hoong",
    "Links": "https://www.google.com/search?q=+Tam+Mak+Hoong+Laos",
    "Flag": "🇱🇦"
  },
  {
    "Country": "Latvia",
    "Dishes": "Layered rye bread",
    "Dish_Normalized": "Layered rye bread",
    "Links": "https://www.google.com/search?q=+Layered+rye+bread+Latvia",
    "Flag": "🇱🇻"
  },
  {
    "Country": "Latvia",
    "Dishes": "sklandrausis",
    "Dish_Normalized": "sklandrausis",
    "Links": "https://www.google.com/search?q=+sklandrausis+Latvia",
    "Flag": "🇱🇻"
  },
  {
    "Country": "Latvia",
    "Dishes": "Jāņi cheese",
    "Dish_Normalized": "Jani cheese",
    "Links": "https://www.google.com/search?q=+Jani+cheese+Latvia",
    "Flag": "🇱🇻"
  },
  {
    "Country": "Lebanon",
    "Dishes": "Kibbeh",
    "Dish_Normalized": "Kibbeh",
    "Links": "https://www.google.com/search?q=+Kibbeh+Lebanon",
    "Flag": "🇱🇧"
  },
  {
    "Country": "Lebanon",
    "Dishes": "Tabbouleh",
    "Dish_Normalized": "Tabbouleh",
    "Links": "https://www.google.com/search?q=+Tabbouleh+Lebanon",
    "Flag": "🇱🇧"
  },
  {
    "Country": "Lithuania",
    "Dishes": "Cepelinai",
    "Dish_Normalized": "Cepelinai",
    "Links": "https://www.google.com/search?q=+Cepelinai+Lithuania",
    "Flag": "🇱🇹"
  },
  {
    "Country": "Lithuania",
    "Dishes": "Šaltibarščiai",
    "Dish_Normalized": "Saltibarsciai",
    "Links": "https://www.google.com/search?q=+Saltibarsciai+Lithuania",
    "Flag": "🇱🇹"
  },
  {
    "Country": "Luxembourg",
    "Dishes": "Judd mat Gaardebounen",
    "Dish_Normalized": "Judd mat Gaardebounen",
    "Links": "https://www.google.com/search?q=+Judd+mat+Gaardebounen+Luxembourg",
    "Flag": "🇱🇺"
  },
  {
    "Country": "Madagascar",
    "Dishes": "Romazava",
    "Dish_Normalized": "Romazava",
    "Links": "https://www.google.com/search?q=+Romazava+Madagascar",
    "Flag": "🇲🇬"
  },
  {
    "Country": "Malawi",
    "Dishes": "Chambo with nshima",
    "Dish_Normalized": "Chambo with nshima",
    "Links": "https://www.google.com/search?q=+Chambo+with+nshima+Malawi",
    "Flag": "🇲🇼"
  },
  {
    "Country": "Malaysia",
    "Dishes": "Nasi lemak",
    "Dish_Normalized": "Nasi lemak",
    "Links": "https://www.google.com/search?q=+Nasi+lemak+Malaysia",
    "Flag": "🇲🇾"
  },
  {
    "Country": "Malaysia",
    "Dishes": "Satay",
    "Dish_Normalized": "Satay",
    "Links": "https://www.google.com/search?q=+Satay+Malaysia",
    "Flag": "🇲🇾"
  },
  {
    "Country": "Malta",
    "Dishes": "Stuffat tal-fenek",
    "Dish_Normalized": "Stuffat tal-fenek",
    "Links": "https://www.google.com/search?q=+Stuffat+tal-fenek+Malta",
    "Flag": "🇲🇹"
  },
  {
    "Country": "Mauritius",
    "Dishes": "Dholl puri (flatbread stuffed with lentils)",
    "Dish_Normalized": "Dholl puri (flatbread stuffed with lentils)",
    "Links": "https://www.google.com/search?q=+Dholl+puri+(flatbread+stuffed+with+lentils)+Mauritius",
    "Flag": "🇲🇺"
  },
  {
    "Country": "Mexico",
    "Dishes": "Taco",
    "Dish_Normalized": "Taco",
    "Links": "https://www.google.com/search?q=+Taco+Mexico",
    "Flag": "🇲🇽"
  },
  {
    "Country": "Mexico",
    "Dishes": "Mole poblano",
    "Dish_Normalized": "Mole poblano",
    "Links": "https://www.google.com/search?q=+Mole+poblano+Mexico",
    "Flag": "🇲🇽"
  },
  {
    "Country": "Mexico",
    "Dishes": "Chiles en nogada",
    "Dish_Normalized": "Chiles en nogada",
    "Links": "https://www.google.com/search?q=+Chiles+en+nogada+Mexico",
    "Flag": "🇲🇽"
  },
  {
    "Country": "Monaco",
    "Dishes": "Barbagiuan",
    "Dish_Normalized": "Barbagiuan",
    "Links": "https://www.google.com/search?q=+Barbagiuan+Monaco",
    "Flag": "🇲🇨"
  },
  {
    "Country": "Morocco",
    "Dishes": "Couscous",
    "Dish_Normalized": "Couscous",
    "Links": "https://www.google.com/search?q=+Couscous+Morocco",
    "Flag": "🇲🇦"
  },
  {
    "Country": "Morocco",
    "Dishes": "Tagine",
    "Dish_Normalized": "Tagine",
    "Links": "https://www.google.com/search?q=+Tagine+Morocco",
    "Flag": "🇲🇦"
  },
  {
    "Country": "Myanmar",
    "Dishes": "Mohinga",
    "Dish_Normalized": "Mohinga",
    "Links": "https://www.google.com/search?q=+Mohinga+Myanmar",
    "Flag": "🇲🇲"
  },
  {
    "Country": "Myanmar",
    "Dishes": "Lahpet thoke",
    "Dish_Normalized": "Lahpet thoke",
    "Links": "https://www.google.com/search?q=+Lahpet+thoke+Myanmar",
    "Flag": "🇲🇲"
  },
  {
    "Country": "Nepal",
    "Dishes": "Dal bhat",
    "Dish_Normalized": "Dal bhat",
    "Links": "https://www.google.com/search?q=+Dal+bhat+Nepal",
    "Flag": "🇳🇵"
  },
  {
    "Country": "Nepal",
    "Dishes": "Momo cha",
    "Dish_Normalized": "Momo cha",
    "Links": "https://www.google.com/search?q=+Momo+cha+Nepal",
    "Flag": "🇳🇵"
  },
  {
    "Country": "Netherlands",
    "Dishes": "Stamppot",
    "Dish_Normalized": "Stamppot",
    "Links": "https://www.google.com/search?q=+Stamppot+Netherlands",
    "Flag": "🇳🇱"
  },
  {
    "Country": "Netherlands",
    "Dishes": "soused herring with onion and pickles",
    "Dish_Normalized": "soused herring with onion and pickles",
    "Links": "https://www.google.com/search?q=+soused+herring+with+onion+and+pickles+Netherlands",
    "Flag": "🇳🇱"
  },
  {
    "Country": "New Zealand",
    "Dishes": "Meat pie",
    "Dish_Normalized": "Meat pie",
    "Links": "https://www.google.com/search?q=+Meat+pie+New Zealand",
    "Flag": "🇳🇿"
  },
  {
    "Country": "New Zealand",
    "Dishes": "bacon and egg pie",
    "Dish_Normalized": "bacon and egg pie",
    "Links": "https://www.google.com/search?q=+bacon+and+egg+pie+New Zealand",
    "Flag": "🇳🇿"
  },
  {
    "Country": "New Zealand",
    "Dishes": "lamb",
    "Dish_Normalized": "lamb",
    "Links": "https://www.google.com/search?q=+lamb+New Zealand",
    "Flag": "🇳🇿"
  },
  {
    "Country": "New Zealand",
    "Dishes": "Pavlova",
    "Dish_Normalized": "Pavlova",
    "Links": "https://www.google.com/search?q=+Pavlova+New Zealand",
    "Flag": "🇳🇿"
  },
  {
    "Country": "Nicaragua",
    "Dishes": "Nacatamal",
    "Dish_Normalized": "Nacatamal",
    "Links": "https://www.google.com/search?q=+Nacatamal+Nicaragua",
    "Flag": "🇳🇮"
  },
  {
    "Country": "Niger",
    "Dishes": "Dambou",
    "Dish_Normalized": "Dambou",
    "Links": "https://www.google.com/search?q=+Dambou+Niger",
    "Flag": "🇳🇪"
  },
  {
    "Country": "Nigeria",
    "Dishes": "Tuwo shinkafa",
    "Dish_Normalized": "Tuwo shinkafa",
    "Links": "https://www.google.com/search?q=+Tuwo+shinkafa+Nigeria",
    "Flag": "🇳🇬"
  },
  {
    "Country": "Nigeria",
    "Dishes": "Jollof rice",
    "Dish_Normalized": "Jollof rice",
    "Links": "https://www.google.com/search?q=+Jollof+rice+Nigeria",
    "Flag": "🇳🇬"
  },
  {
    "Country": "Nigeria",
    "Dishes": "Pounded Yam and Egusi soup",
    "Dish_Normalized": "Pounded Yam and Egusi soup",
    "Links": "https://www.google.com/search?q=+Pounded+Yam+and+Egusi+soup+Nigeria",
    "Flag": "🇳🇬"
  },
  {
    "Country": "Norway",
    "Dishes": "Fårikål",
    "Dish_Normalized": "Farikal",
    "Links": "https://www.google.com/search?q=+Farikal+Norway",
    "Flag": "🇳🇴"
  },
  {
    "Country": "Oman",
    "Dishes": "Shuwa",
    "Dish_Normalized": "Shuwa",
    "Links": "https://www.google.com/search?q=+Shuwa+Oman",
    "Flag": "🇴🇲"
  },
  {
    "Country": "Pakistan",
    "Dishes": "Biryani",
    "Dish_Normalized": "Biryani",
    "Links": "https://www.google.com/search?q=+Biryani+Pakistan",
    "Flag": "🇵🇰"
  },
  {
    "Country": "Pakistan",
    "Dishes": "Nihari",
    "Dish_Normalized": "Nihari",
    "Links": "https://www.google.com/search?q=+Nihari+Pakistan",
    "Flag": "🇵🇰"
  },
  {
    "Country": "Pakistan",
    "Dishes": "Gulab jamun",
    "Dish_Normalized": "Gulab jamun",
    "Links": "https://www.google.com/search?q=+Gulab+jamun+Pakistan",
    "Flag": "🇵🇰"
  },
  {
    "Country": "Palestine",
    "Dishes": "Maqluba",
    "Dish_Normalized": "Maqluba",
    "Links": "https://www.google.com/search?q=+Maqluba+Palestine",
    "Flag": "🇵🇸"
  },
  {
    "Country": "Palestine",
    "Dishes": "Musakhan",
    "Dish_Normalized": "Musakhan",
    "Links": "https://www.google.com/search?q=+Musakhan+Palestine",
    "Flag": "🇵🇸"
  },
  {
    "Country": "Palestine",
    "Dishes": "falafel",
    "Dish_Normalized": "falafel",
    "Links": "https://www.google.com/search?q=+falafel+Palestine",
    "Flag": "🇵🇸"
  },
  {
    "Country": "Panama",
    "Dishes": "Sancocho",
    "Dish_Normalized": "Sancocho",
    "Links": "https://www.google.com/search?q=+Sancocho+Panama",
    "Flag": "🇵🇦"
  },
  {
    "Country": "Peru",
    "Dishes": "Ceviche",
    "Dish_Normalized": "Ceviche",
    "Links": "https://www.google.com/search?q=+Ceviche+Peru",
    "Flag": "🇵🇪"
  },
  {
    "Country": "Philippines",
    "Dishes": "Adobo",
    "Dish_Normalized": "Adobo",
    "Links": "https://www.google.com/search?q=+Adobo+Philippines",
    "Flag": "🇵🇭"
  },
  {
    "Country": "Philippines",
    "Dishes": "Sinigang",
    "Dish_Normalized": "Sinigang",
    "Links": "https://www.google.com/search?q=+Sinigang+Philippines",
    "Flag": "🇵🇭"
  },
  {
    "Country": "Philippines",
    "Dishes": "Sisig",
    "Dish_Normalized": "Sisig",
    "Links": "https://www.google.com/search?q=+Sisig+Philippines",
    "Flag": "🇵🇭"
  },
  {
    "Country": "Philippines",
    "Dishes": "Pancit",
    "Dish_Normalized": "Pancit",
    "Links": "https://www.google.com/search?q=+Pancit+Philippines",
    "Flag": "🇵🇭"
  },
  {
    "Country": "Philippines",
    "Dishes": "Halo-halo",
    "Dish_Normalized": "Halo-halo",
    "Links": "https://www.google.com/search?q=+Halo-halo+Philippines",
    "Flag": "🇵🇭"
  },
  {
    "Country": "Poland",
    "Dishes": "Bigos",
    "Dish_Normalized": "Bigos",
    "Links": "https://www.google.com/search?q=+Bigos+Poland",
    "Flag": "🇵🇱"
  },
  {
    "Country": "Poland",
    "Dishes": "Pierogi",
    "Dish_Normalized": "Pierogi",
    "Links": "https://www.google.com/search?q=+Pierogi+Poland",
    "Flag": "🇵🇱"
  },
  {
    "Country": "Poland",
    "Dishes": "Kotlet schabowy",
    "Dish_Normalized": "Kotlet schabowy",
    "Links": "https://www.google.com/search?q=+Kotlet+schabowy+Poland",
    "Flag": "🇵🇱"
  },
  {
    "Country": "Portugal",
    "Dishes": "Bacalhau",
    "Dish_Normalized": "Bacalhau",
    "Links": "https://www.google.com/search?q=+Bacalhau+Portugal",
    "Flag": "🇵🇹"
  },
  {
    "Country": "Portugal",
    "Dishes": "Caldo verde",
    "Dish_Normalized": "Caldo verde",
    "Links": "https://www.google.com/search?q=+Caldo+verde+Portugal",
    "Flag": "🇵🇹"
  },
  {
    "Country": "Portugal",
    "Dishes": "cozido à portuguesa",
    "Dish_Normalized": "cozido a portuguesa",
    "Links": "https://www.google.com/search?q=+cozido+a+portuguesa+Portugal",
    "Flag": "🇵🇹"
  },
  {
    "Country": "Portugal",
    "Dishes": "Pastel de Belem",
    "Dish_Normalized": "Pastel de Belem",
    "Links": "https://www.google.com/search?q=+Pastel+de+Belem+Portugal",
    "Flag": "🇵🇹"
  },
  {
    "Country": "Portugal",
    "Dishes": "Sardinha Assada (Grilled Sardines)",
    "Dish_Normalized": "Sardinha Assada (Grilled Sardines)",
    "Links": "https://www.google.com/search?q=+Sardinha+Assada+(Grilled+Sardines)+Portugal",
    "Flag": "🇵🇹"
  },
  {
    "Country": "Qatar",
    "Dishes": "Machboos",
    "Dish_Normalized": "Machboos",
    "Links": "https://www.google.com/search?q=+Machboos+Qatar",
    "Flag": "🇶🇦"
  },
  {
    "Country": "Romania",
    "Dishes": "Mămăligă",
    "Dish_Normalized": "Mamaliga",
    "Links": "https://www.google.com/search?q=+Mamaliga+Romania",
    "Flag": "🇷🇴"
  },
  {
    "Country": "Romania",
    "Dishes": "Sarmale",
    "Dish_Normalized": "Sarmale",
    "Links": "https://www.google.com/search?q=+Sarmale+Romania",
    "Flag": "🇷🇴"
  },
  {
    "Country": "Romania",
    "Dishes": "Mici",
    "Dish_Normalized": "Mici",
    "Links": "https://www.google.com/search?q=+Mici+Romania",
    "Flag": "🇷🇴"
  },
  {
    "Country": "Russia",
    "Dishes": "Borscht",
    "Dish_Normalized": "Borscht",
    "Links": "https://www.google.com/search?q=+Borscht+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Shchi",
    "Dish_Normalized": "Shchi",
    "Links": "https://www.google.com/search?q=+Shchi+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Kasha",
    "Dish_Normalized": "Kasha",
    "Links": "https://www.google.com/search?q=+Kasha+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Pelmeni",
    "Dish_Normalized": "Pelmeni",
    "Links": "https://www.google.com/search?q=+Pelmeni+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Pirozhki",
    "Dish_Normalized": "Pirozhki",
    "Links": "https://www.google.com/search?q=+Pirozhki+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Bliny",
    "Dish_Normalized": "Bliny",
    "Links": "https://www.google.com/search?q=+Bliny+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Oladyi",
    "Dish_Normalized": "Oladyi",
    "Links": "https://www.google.com/search?q=+Oladyi+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Sour Cabbage",
    "Dish_Normalized": "Sour Cabbage",
    "Links": "https://www.google.com/search?q=+Sour+Cabbage+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Bublik",
    "Dish_Normalized": "Bublik",
    "Links": "https://www.google.com/search?q=+Bublik+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Baranki",
    "Dish_Normalized": "Baranki",
    "Links": "https://www.google.com/search?q=+Baranki+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Karavai",
    "Dish_Normalized": "Karavai",
    "Links": "https://www.google.com/search?q=+Karavai+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Solenia",
    "Dish_Normalized": "Solenia",
    "Links": "https://www.google.com/search?q=+Solenia+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Vareniki",
    "Dish_Normalized": "Vareniki",
    "Links": "https://www.google.com/search?q=+Vareniki+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Rassolnik",
    "Dish_Normalized": "Rassolnik",
    "Links": "https://www.google.com/search?q=+Rassolnik+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Russia",
    "Dishes": "Pryanik",
    "Dish_Normalized": "Pryanik",
    "Links": "https://www.google.com/search?q=+Pryanik+Russia",
    "Flag": "🇷🇺"
  },
  {
    "Country": "Saudi Arabia",
    "Dishes": "Kabsa",
    "Dish_Normalized": "Kabsa",
    "Links": "https://www.google.com/search?q=+Kabsa+Saudi Arabia",
    "Flag": "🇸🇦"
  },
  {
    "Country": "Saudi Arabia",
    "Dishes": "Saleeg",
    "Dish_Normalized": "Saleeg",
    "Links": "https://www.google.com/search?q=+Saleeg+Saudi Arabia",
    "Flag": "🇸🇦"
  },
  {
    "Country": "Senegal",
    "Dishes": "Thieboudienne",
    "Dish_Normalized": "Thieboudienne",
    "Links": "https://www.google.com/search?q=+Thieboudienne+Senegal",
    "Flag": "🇸🇳"
  },
  {
    "Country": "Serbia",
    "Dishes": "Ćevapčići",
    "Dish_Normalized": "Cevapcici",
    "Links": "https://www.google.com/search?q=+Cevapcici+Serbia",
    "Flag": "🇷🇸"
  },
  {
    "Country": "Serbia",
    "Dishes": "Pljeskavica",
    "Dish_Normalized": "Pljeskavica",
    "Links": "https://www.google.com/search?q=+Pljeskavica+Serbia",
    "Flag": "🇷🇸"
  },
  {
    "Country": "Serbia",
    "Dishes": "Gibanica (pastry)",
    "Dish_Normalized": "Gibanica (pastry)",
    "Links": "https://www.google.com/search?q=+Gibanica+(pastry)+Serbia",
    "Flag": "🇷🇸"
  },
  {
    "Country": "Singapore",
    "Dishes": "Chilli crab",
    "Dish_Normalized": "Chilli crab",
    "Links": "https://www.google.com/search?q=+Chilli+crab+Singapore",
    "Flag": "🇸🇬"
  },
  {
    "Country": "Singapore",
    "Dishes": "Hainanese chicken rice",
    "Dish_Normalized": "Hainanese chicken rice",
    "Links": "https://www.google.com/search?q=+Hainanese+chicken+rice+Singapore",
    "Flag": "🇸🇬"
  },
  {
    "Country": "Singapore",
    "Dishes": "Hokkien mee",
    "Dish_Normalized": "Hokkien mee",
    "Links": "https://www.google.com/search?q=+Hokkien+mee+Singapore",
    "Flag": "🇸🇬"
  },
  {
    "Country": "Singapore",
    "Dishes": "",
    "Dish_Normalized": "",
    "Links": "https://www.google.com/search?q=+Singapore",
    "Flag": "🇸🇬"
  },
  {
    "Country": "Slovakia",
    "Dishes": "Bryndzové halušky",
    "Dish_Normalized": "Bryndzove halusky",
    "Links": "https://www.google.com/search?q=+Bryndzove+halusky+Slovakia",
    "Flag": "🇸🇰"
  },
  {
    "Country": "Slovenia",
    "Dishes": "Buckwheat dumplings (particularly štruklji)",
    "Dish_Normalized": "Buckwheat dumplings (particularly struklji)",
    "Links": "https://www.google.com/search?q=+Buckwheat+dumplings+(particularly+struklji)+Slovenia",
    "Flag": "🇸🇮"
  },
  {
    "Country": "Slovenia",
    "Dishes": "Idrijski žlikrofi",
    "Dish_Normalized": "Idrijski zlikrofi",
    "Links": "https://www.google.com/search?q=Idrijski+zlikrofi+Slovenia",
    "Flag": "🇸🇮"
  },
  {
    "Country": "South Africa",
    "Dishes": "Bobotie",
    "Dish_Normalized": "Bobotie",
    "Links": "https://www.google.com/search?q=+Bobotie+South Africa",
    "Flag": "🇿🇦"
  },
  {
    "Country": "Spain",
    "Dishes": "Tortilla de patatas",
    "Dish_Normalized": "Tortilla de patatas",
    "Links": "https://www.google.com/search?q=+Tortilla+de+patatas+Spain",
    "Flag": "🇪🇸"
  },
  {
    "Country": "Sri Lanka",
    "Dishes": "Rice and curry",
    "Dish_Normalized": "Rice and curry",
    "Links": "https://www.google.com/search?q=+Rice+and+curry+Sri Lanka",
    "Flag": "🇱🇰"
  },
  {
    "Country": "Sri Lanka",
    "Dishes": "Kottu",
    "Dish_Normalized": "Kottu",
    "Links": "https://www.google.com/search?q=+Kottu+Sri Lanka",
    "Flag": "🇱🇰"
  },
  {
    "Country": "Suriname",
    "Dishes": "Pom",
    "Dish_Normalized": "Pom",
    "Links": "https://www.google.com/search?q=+Pom+Suriname",
    "Flag": "🇸🇷"
  },
  {
    "Country": "Sweden",
    "Dishes": "Köttbullar",
    "Dish_Normalized": "Kottbullar",
    "Links": "https://www.google.com/search?q=+Kottbullar+Sweden",
    "Flag": "🇸🇪"
  },
  {
    "Country": "Sweden",
    "Dishes": "Kräftskiva",
    "Dish_Normalized": "Kraftskiva",
    "Links": "https://www.google.com/search?q=+Kraftskiva+Sweden",
    "Flag": "🇸🇪"
  },
  {
    "Country": "Sweden",
    "Dishes": "Surströmming",
    "Dish_Normalized": "Surstromming",
    "Links": "https://www.google.com/search?q=+Surstromming+Sweden",
    "Flag": "🇸🇪"
  },
  {
    "Country": "Sweden",
    "Dishes": "Ostkaka",
    "Dish_Normalized": "Ostkaka",
    "Links": "https://www.google.com/search?q=+Ostkaka+Sweden",
    "Flag": "🇸🇪"
  },
  {
    "Country": "Switzerland",
    "Dishes": "Cervelat",
    "Dish_Normalized": "Cervelat",
    "Links": "https://www.google.com/search?q=+Cervelat+Switzerland",
    "Flag": "🇨🇭"
  },
  {
    "Country": "Switzerland",
    "Dishes": "Fondue",
    "Dish_Normalized": "Fondue",
    "Links": "https://www.google.com/search?q=+Fondue+Switzerland",
    "Flag": "🇨🇭"
  },
  {
    "Country": "Switzerland",
    "Dishes": "Rösti",
    "Dish_Normalized": "Rosti",
    "Links": "https://www.google.com/search?q=+Rosti+Switzerland",
    "Flag": "🇨🇭"
  },
  {
    "Country": "Switzerland",
    "Dishes": "Zürcher Geschnetzeltes",
    "Dish_Normalized": "Zurcher Geschnetzeltes",
    "Links": "https://www.google.com/search?q=+Zurcher+Geschnetzeltes+Switzerland",
    "Flag": "🇨🇭"
  },
  {
    "Country": "Syria",
    "Dishes": "Kibbeh",
    "Dish_Normalized": "Kibbeh",
    "Links": "https://www.google.com/search?q=+Kibbeh+Syria",
    "Flag": "🇸🇾"
  },
  {
    "Country": "Taiwan",
    "Dishes": "Beef noodle soup Minced pork rice",
    "Dish_Normalized": "Beef noodle soup Minced pork rice",
    "Links": "https://www.google.com/search?q=+Beef+noodle+soup+Minced+pork+rice+Taiwan",
    "Flag": "🇹🇼"
  },
  {
    "Country": "Tajikistan",
    "Dishes": "Osh Palov",
    "Dish_Normalized": "Osh Palov",
    "Links": "https://www.google.com/search?q=+Osh+Palov+Tajikistan",
    "Flag": "🇹🇯"
  },
  {
    "Country": "Tajikistan",
    "Dishes": "Qurutob",
    "Dish_Normalized": "Qurutob",
    "Links": "https://www.google.com/search?q=+Qurutob+Tajikistan",
    "Flag": "🇹🇯"
  },
  {
    "Country": "Tanzania",
    "Dishes": "Chipsi mayai",
    "Dish_Normalized": "Chipsi mayai",
    "Links": "https://www.google.com/search?q=+Chipsi+mayai+Tanzania",
    "Flag": "🇹🇿"
  },
  {
    "Country": "Thailand",
    "Dishes": "Pad Thai",
    "Dish_Normalized": "Pad Thai",
    "Links": "https://www.google.com/search?q=+Pad+Thai+Thailand",
    "Flag": "🇹🇭"
  },
  {
    "Country": "Thailand",
    "Dishes": "Tom yum",
    "Dish_Normalized": "Tom yum",
    "Links": "https://www.google.com/search?q=+Tom+yum+Thailand",
    "Flag": "🇹🇭"
  },
  {
    "Country": "Thailand",
    "Dishes": "Som tam",
    "Dish_Normalized": "Som tam",
    "Links": "https://www.google.com/search?q=+Som+tam+Thailand",
    "Flag": "🇹🇭"
  },
  {
    "Country": "Trinidad and Tobago",
    "Dishes": "Callaloo",
    "Dish_Normalized": "Callaloo",
    "Links": "https://www.google.com/search?q=+Callaloo+Trinidad and Tobago",
    "Flag": "🇹🇹"
  },
  {
    "Country": "Trinidad and Tobago",
    "Dishes": "Doubles",
    "Dish_Normalized": "Doubles",
    "Links": "https://www.google.com/search?q=+Doubles+Trinidad and Tobago",
    "Flag": "🇹🇹"
  },
  {
    "Country": "Trinidad and Tobago",
    "Dishes": "Pelau",
    "Dish_Normalized": "Pelau",
    "Links": "https://www.google.com/search?q=+Pelau+Trinidad and Tobago",
    "Flag": "🇹🇹"
  },
  {
    "Country": "Tunisia",
    "Dishes": "Kosksi",
    "Dish_Normalized": "Kosksi",
    "Links": "https://www.google.com/search?q=+Kosksi+Tunisia",
    "Flag": "🇹🇳"
  },
  {
    "Country": "Tunisia",
    "Dishes": "Brik/Bric",
    "Dish_Normalized": "Brik/Bric",
    "Links": "https://www.google.com/search?q=+Brik/Bric+Tunisia",
    "Flag": "🇹🇳"
  },
  {
    "Country": "Turkey",
    "Dishes": "Kuru fasulye with pilaf/pilau",
    "Dish_Normalized": "Kuru fasulye with pilaf/pilau",
    "Links": "https://www.google.com/search?q=+Kuru+fasulye+with+pilaf/pilau+Turkey",
    "Flag": "🇹🇷"
  },
  {
    "Country": "Turkey",
    "Dishes": "Kebap",
    "Dish_Normalized": "Kebap",
    "Links": "https://www.google.com/search?q=+Kebap+Turkey",
    "Flag": "🇹🇷"
  },
  {
    "Country": "Turkey",
    "Dishes": "Baklava",
    "Dish_Normalized": "Baklava",
    "Links": "https://www.google.com/search?q=+Baklava+Turkey",
    "Flag": "🇹🇷"
  },
  {
    "Country": "Turkey",
    "Dishes": "Simit",
    "Dish_Normalized": "Simit",
    "Links": "https://www.google.com/search?q=+Simit+Turkey",
    "Flag": "🇹🇷"
  },
  {
    "Country": "Uganda",
    "Dishes": "Matooke",
    "Dish_Normalized": "Matooke",
    "Links": "https://www.google.com/search?q=+Matooke+Uganda",
    "Flag": "🇺🇬"
  },
  {
    "Country": "Ukraine",
    "Dishes": "Borscht",
    "Dish_Normalized": "Borscht",
    "Links": "https://www.google.com/search?q=+Borscht+Ukraine",
    "Flag": "🇺🇦"
  },
  {
    "Country": "Ukraine",
    "Dishes": "Varenyky",
    "Dish_Normalized": "Varenyky",
    "Links": "https://www.google.com/search?q=+Varenyky+Ukraine",
    "Flag": "🇺🇦"
  },
  {
    "Country": "United Arab Emirates",
    "Dishes": "Harees",
    "Dish_Normalized": "Harees",
    "Links": "https://www.google.com/search?q=+Harees+United Arab Emirates",
    "Flag": "🇦🇪"
  },
  {
    "Country": "United Kingdom",
    "Dishes": "Fish and chips",
    "Dish_Normalized": "Fish and chips",
    "Links": "https://www.google.com/search?q=+Fish+and+chips+United Kingdom",
    "Flag": "🇬🇧"
  },
  {
    "Country": "United Kingdom",
    "Dishes": "Chicken tikka masala",
    "Dish_Normalized": "Chicken tikka masala",
    "Links": "https://www.google.com/search?q=+Chicken+tikka+masala+United Kingdom",
    "Flag": "🇬🇧"
  },
  {
    "Country": "United Kingdom",
    "Dishes": "Full breakfast (regional variations)",
    "Dish_Normalized": "Full breakfast (regional variations)",
    "Links": "https://www.google.com/search?q=+Full+breakfast+(regional+variations)+United Kingdom",
    "Flag": "🇬🇧"
  },
  {
    "Country": "England",
    "Dishes": "Sunday roast (especially roast beef)",
    "Dish_Normalized": "Sunday roast (especially roast beef)",
    "Links": "https://www.google.com/search?q=+Sunday+roast+(especially+roast+beef)+England",
    "Flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
  },
  {
    "Country": "England",
    "Dishes": "pudding (particularly Christmas plum pudding)",
    "Dish_Normalized": "pudding (particularly Christmas plum pudding)",
    "Links": "https://www.google.com/search?q=+pudding+(particularly+Christmas+plum+pudding)+England",
    "Flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
  },
  {
    "Country": "Scotland",
    "Dishes": "Haggis",
    "Dish_Normalized": "Haggis",
    "Links": "https://www.google.com/search?q=+Haggis+Scotland",
    "Flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
  },
  {
    "Country": "Wales",
    "Dishes": "Cawl",
    "Dish_Normalized": "Cawl",
    "Links": "https://www.google.com/search?q=+Cawl+Wales",
    "Flag": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
  },
  {
    "Country": "American Samoa",
    "Dishes": "Palusami",
    "Dish_Normalized": "Palusami",
    "Links": "https://www.google.com/search?q=+Palusami+American Samoa",
    "Flag": "🇦🇸"
  },
  {
    "Country": "Guam",
    "Dishes": "Kelaguen",
    "Dish_Normalized": "Kelaguen",
    "Links": "https://www.google.com/search?q=+Kelaguen+Guam",
    "Flag": "🇬🇺"
  },
  {
    "Country": "Guam",
    "Dishes": "Spam",
    "Dish_Normalized": "Spam",
    "Links": "https://www.google.com/search?q=+Spam+Guam",
    "Flag": "🇬🇺"
  },
  {
    "Country": "Northern Mariana Islands",
    "Dishes": "Kelaguen",
    "Dish_Normalized": "Kelaguen",
    "Links": "https://www.google.com/search?q=+Kelaguen+Northern Mariana Islands",
    "Flag": "🇲🇵"
  },
  {
    "Country": "Puerto Rico",
    "Dishes": "Lechon",
    "Dish_Normalized": "Lechon",
    "Links": "https://www.google.com/search?q=+Lechon+Puerto Rico",
    "Flag": "🇵🇷"
  },
  {
    "Country": "Puerto Rico",
    "Dishes": "Mofongo",
    "Dish_Normalized": "Mofongo",
    "Links": "https://www.google.com/search?q=+Mofongo+Puerto Rico",
    "Flag": "🇵🇷"
  },
  {
    "Country": "United States Virgin Islands",
    "Dishes": "Funji",
    "Dish_Normalized": "Funji",
    "Links": "https://www.google.com/search?q=+Funji+United States Virgin Islands",
    "Flag": "🇻🇮"
  },
  {
    "Country": "Uruguay",
    "Dishes": "Chivito",
    "Dish_Normalized": "Chivito",
    "Links": "https://www.google.com/search?q=+Chivito+Uruguay",
    "Flag": "🇺🇾"
  },
  {
    "Country": "Uzbekistan",
    "Dishes": "O'sh",
    "Dish_Normalized": "O'sh",
    "Links": "https://www.google.com/search?q=+O'sh+Uzbekistan",
    "Flag": "🇺🇿"
  },
  {
    "Country": "Vanuatu",
    "Dishes": "Laplap",
    "Dish_Normalized": "Laplap",
    "Links": "https://www.google.com/search?q=+Laplap+Vanuatu",
    "Flag": "🇻🇺"
  },
  {
    "Country": "Venezuela",
    "Dishes": "Pabellón criollo",
    "Dish_Normalized": "Pabellon criollo",
    "Links": "https://www.google.com/search?q=+Pabellon+criollo+Venezuela",
    "Flag": "🇻🇪"
  },
  {
    "Country": "Venezuela",
    "Dishes": "arepa",
    "Dish_Normalized": "arepa",
    "Links": "https://www.google.com/search?q=+arepa+Venezuela",
    "Flag": "🇻🇪"
  },
  {
    "Country": "Venezuela",
    "Dishes": "Cachapa.",
    "Dish_Normalized": "Cachapa.",
    "Links": "https://www.google.com/search?q=+Cachapa.+Venezuela",
    "Flag": "🇻🇪"
  },
  {
    "Country": "Vietnam",
    "Dishes": "Pho",
    "Dish_Normalized": "Pho",
    "Links": "https://www.google.com/search?q=+Pho+Vietnam",
    "Flag": "🇻🇳"
  },
  {
    "Country": "Yemen",
    "Dishes": "Saltah",
    "Dish_Normalized": "Saltah",
    "Links": "https://www.google.com/search?q=+Saltah+Yemen",
    "Flag": "🇾🇪"
  },
  {
    "Country": "Zambia",
    "Dishes": "Nshima",
    "Dish_Normalized": "Nshima",
    "Links": "https://www.google.com/search?q=+Nshima+Zambia",
    "Flag": "🇿🇲"
  },
  {
    "Country": "Zimbabwe",
    "Dishes": "Sadza",
    "Dish_Normalized": "Sadza",
    "Links": "https://www.google.com/search?q=+Sadza+Zimbabwe",
    "Flag": "🇿🇼"
  }
]

function newDish_nation() {
  var randomNumber = Math.floor(Math.random() * (dishes_by_nation.length));
  index_national_dishes = dishes_by_nation[randomNumber];

  let country = index_national_dishes["Country"];
  let dish_name = index_national_dishes["Dishes"];
  let flag = index_national_dishes["Flag"];
  let links = dish_name.link(index_national_dishes["Links"]);
  document.getElementById('nationaldishDisplay').innerHTML = links;
  document.getElementById('countryDisplay').innerHTML = country;
  document.getElementById('flagDisplay').innerHTML = flag;

}



