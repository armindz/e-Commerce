let Article = function(id, name, type, size, gender, price, quantity, text, extraText, color, image, isOnSale) {

    this.id = id;
    this.name = name;
    this.type = type;
    this.size = size;
    this.gender = gender;
    this.price = price;
    this.quantity = quantity;
    this.text = text;
    this.extraText = extraText;
    this.color = color;
    this.image = image;
    this.isOnSale = isOnSale;

    this.get_id = function() {
        return this.id;
    };

    this.get_name = function() {
        return this.name;
    };

    this.get_type = function() {
        return this.type;
    };

    this.get_size = function() {
        return this.size;
    };

    this.get_gender = function() {
        return this.gender;
    };

    this.get_price = function() {
        return this.price;

    };

    this.get_quantity = function() {
        return this.quantity;
    };

    this.get_text = function() {
        return this.text;
    };

    this.get_extraText = function() {
        return this.extraText;
    };
    this.get_color = function() {
        return this.color;
    };

    this.image = function() {
        return this.image;
    };
    this.get_isOnSale = function() {
        return this.isOnSale;
    };
    this.setOnSale = function() {

        this.isOnSale = true;
    };

    this.setNotOnSale = function() {
        this.isOnSale = false;
    };
};

// constants
const FEMALE_GENDER = "FEMALE";
const MALE_GENDER = "MALE";
const CURRENCY_EURO = "&#8364;";
const ARTICLE_TAX = 2;
// lists
let listOfArticles = [];
let cartArticles = [];

// use to test
createArticle(0, "SPACE DYE POLO SHIRT", "T-SHIRT", "L", "MALE", 2, 1, "This polo is knitted in a soft cotton blend for cool comfort and detailed with three button fastenings at the collar. ", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "RED", true);
createArticle(1, "SHORT SLEEVE T-SHIRT", "T-SHIRT", "M", "FEMALE", 33, 6, "Made from soft cotton for cool and breathable comfort on the warmest days, it's detailed with a Cuban collar and comes in a regular fit for a relaxed look and feel.", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "GREY", true);
createArticle(2, "GUINNESS SHIRT", "SHIRT", "XL", "MALE", 5, 4, "Delight the Guinness fan in your life with this classically cool tee - styled in soft grey cotton with a simple crew neckline, ", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "GREEN", false);
createArticle(3, "DRESS - CULT GAIA", "DRESS", "M", "FEMALE", 3, 9, "Keeping it cute and casual. Smock dress with a fill v-neckline for that extra feminine look. ", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "YELLOW", true);
createArticle(4, "CHEVRON CREW SHIRT", "SHIRT", "XL", "MALE", 5, 2, "Styled with on-trend panel detailing in a contrast black chevron design, this crew neck jumper is made from a soft brushback cotton blend for all-day comfort.", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "YELLOW", true);
createArticle(5, "CAMEL FAUX SUEDE JACKET", "JACKET", "M", "FEMALE", 89, 3, "Take the look into the warmer season with our faux suede rendition. In the classic biker shape with a silver zip front and zipped side pockets", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "WHITE", false);
createArticle(0930647001, "RECYCLED POLYESTER PERFORMANCE PARKA", "SHIRT", "M", "FEMALE", 135, 3, "Crafted from an organic cotton-mulberry silk mix, this oversized cardigan features a elasticated body and dropped shoulder. Effortlessly style with tonal shorts and pumps. \n\n - Relaxed fit \n - Dropped shoulder \n - Elasticated body \n - Ribbed cuff \n\n 32% PolyAmide, 29% Viscose, 23% Mulberry silk, 15% Organic cotton, 1% Elastane / Machine washable \n\n Back length of size XS/S is 70cm", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "GREEN", true);
createArticle(7, "DRESS BALMAIN", "DRESS", "XL", "MALE", 240, 3, " it'll take you effortlessly into the spring and summer months ? just throw it on with your favourite trainers and you're good to go. ", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "BLUE", true);
createArticle(8, "SHIRT - RUSSIAN COLLAR", "SHIRT", "L", "MALE", 5, 2, "Lorem ipsum dolor, sit amet consectetur", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "GREEN", true);
createArticle(9, "OVERSIZED DIP BACK DRESS", "DRESS", "L", "FEMALE", 84, 2, "An oversized shirt dress featuring button through front and tie dye print with a dip back hem design", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "BLUE", true);
createArticle(10, "STRAPPY CAMI BODYSUIT", "BODYSUIT", "L", "FEMALE", 51, 4, "Strappy cami bodysuit in a jersey fabric with popper fastening.", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "WHITE", false);
createArticle(11, "BLACK POLKA DRESS", "SHIRT", "L", "FEMALE", 96, 2, "Black polka dot short sleeve ruched bust milkmaid style midi dress in a stretch crepe fabric.", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "BLACK", true);
createArticle(12, "NAVY BUTTON FRONT BLOUSE", "SHIRT", "L", "MALE", 43, 2, "Smart and simple, this timeless navy blouse ensures a polished finished. Styled with a collared button front, it's finished with turn-tab short sleeves for added elegance. Perfect for the office and formal dressing alike.", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "GREEN", false);
createArticle(13, "KHAKI HARRINGTON JACKET", "JACKET", "XL", "MALE", 129, 2, "Put a smart new spin on your cold-weather essentials with our classic Harrington jacket. In khaki, it comes fully lined for extra warmth and features a showerproof finish to help you brave the wet weather in style.", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "GREEN", true);
createArticle(14, "US ATHLETIC BROOKLYN T-SHIRT", "T-SHIRT", "L", "MALE", 69, 2, "These navy joggers come in a comfy cuffed fit with an elasticated drawstring waist and two handy side pockets for essential storage.", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "WHITE", false);
createArticle(15, "APRIL RIPPED JEANS", "JEANS", "L", "FEMALE", 48, 2, "Designed to flatter your legs without compromising on comfort, these soft touch skinnies come in vintage wash denim with edgy ripped detailing. ", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "GREY", true);
createArticle(16, "REGATTA NAVY LAINE JACKET", "JACKET", "M", "FEMALE", 146, 2, "Regatta Navy Laine Jacket", "32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable \n\n Make sure that your favourite items remain long-loved pieces for years to come; read our product care guide and explore our selection of carefully chosen care products.\n", "BLACK", false);
addToCart(2);
addToCart(5);



function createArticle(id, name, type, size, gender, price, quantity, text, color, isOnSale) { // mechanism used to create article with data forwarded

    let article = new Article(id, name, type, size, gender, price, quantity, text, color, isOnSale);
    listOfArticles.push(article);
}


function getListOfArticles() { // list of articles getter

    return listOfArticles;
}


function getArticlesListOnSale() { // get list of articles declared as on-sale-item

    let onSaleArticles = [];
    // iterate over list of articles in order to collect only specific gender
    for (let i = 0; i < listOfArticles.length; i++) {

        if (listOfArticles[i].get_isOnSale()) {
            onSaleArticles.push(listOfArticles[i]);
        }
    }
    return onSaleArticles;
}


function getArticlesListByGender(gender) { // return list of gender-based articles 

    let genderList = [];
    // iterate over list of articles in order to collect only specific gender
    for (let i = 0; i < listOfArticles.length; i++) {
        if (listOfArticles[i].get_gender() === gender) {
            genderList.push(listOfArticles[i]);
        }
    }
    return genderList;
}


function getArticleById(id) { // return article containing forwarded id

    for (let i = 0; i < listOfArticles.length; i++) {
        if (listOfArticles[i].get_id() === id) {
            return listOfArticles[i];
        }
    }
}

// pass value & redirect
function viewArticle(id) {

    let article = getArticleById(id);
    localStorage.setItem("article-id", id);
    window.location.href = "./article.html";


}

// mechanism for managing cart list
function handleCartList(articleId) {



    if (cartArticles.length == 0) { // if empty
        addToCart(articleId);
        document.getElementById("article-submit-btn").innerHTML = "REMOVE";
        cartPreviewMini();
    } else { // if list is not empty

        if (isArticleInCart(articleId)) { // if already contains article
            removeFromCart(articleId);

            cartPreviewMini(); // make element visible

            document.getElementById("article-submit-btn").innerHTML = '<span>Add to cart</span>';
            return;

        } else {
            addToCart(articleId);
            cartPreviewMini(); // make element visible

            document.getElementById("article-submit-btn").innerHTML = "Remove from cart";


        }
    }

}



function isArticleInCart(articleId) {

    for (let i = 0; i < cartArticles.length; i++) {


        if (cartArticles[i].get_id() == articleId) { // if already contains article
            return true;

        }
    }
    return false;
}
// add to cart by forwarding article id
function addToCart(articleId) {

    let article = getArticleById(articleId);
    cartArticles.push(article);
}

// remove from cart by forwarding article id
function removeFromCart(articleId) {

    for (let i = 0; i < cartArticles.length; i++) {
        if (cartArticles[i].get_id() == articleId) {
            cartArticles.splice(i, 1);
        }
    }
}

function insertArticlesIntoWomen() { // diynamically insert articles into women section 

    let genderList = getArticlesListByGender(FEMALE_GENDER);
    const CARDS_PER_ROW = 4;
    const ROWS = genderList.length / CARDS_PER_ROW;

    // variables below are declared outside to avoid interrupting values at new loop
    let i = 0;
    let j = 0;

    for (j; j < ROWS; j++) {

        // prepare card printing by creating new zigzag row
        let div = document.createElement("DIV");
        div.setAttribute("class", "container");
        document.getElementById("women-container").appendChild(div);
        let ul = document.createElement("UL");
        ul.setAttribute("class", "zigzag-row");
        div.appendChild(ul);

        for (i; i < genderList.length; i++) {

            if (i % CARDS_PER_ROW != 0) { // insert card into existing row if "i" is not equal to card per row

                // insert card into row
                ul.innerHTML += "<li>" +
                    "<img id='article-card' name=" +
                    genderList[i].get_id() +
                    " onclick='viewArticle(" + genderList[i].get_id() + ")'src='img/res/slika7.png'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + CURRENCY_EURO + genderList[i].get_price() + "</p>" +
                    "</li>";
            } else { // create new row if "i" is equal to card per row

                // prepare card printing by creating new zigzag row
                let newDiv = document.createElement("DIV");
                newDiv.setAttribute("class", "container");
                document.getElementById("women-container").appendChild(newDiv);
                let newUl = document.createElement("UL");
                newUl.setAttribute("class", "zigzag-row");
                newDiv.appendChild(newUl);

                // insert card into row
                newUl.innerHTML += "<li>" +
                    "<img id='article-card' name=" +
                    genderList[i].get_id() +
                    " onclick='viewArticle(" + genderList[i].get_id() + ")'src='img/res/slika7.png'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + CURRENCY_EURO + genderList[i].get_price() + "</p>" +
                    "</li>";

                // declare new ul and div as default one to be executed on next iteration
                ul = newUl;
                div = newDiv;
            }
        }
    }
}

function insertArticlesIntoMen() { // diynamically insert articles into men section 

    let genderList = getArticlesListByGender(MALE_GENDER);
    const CARDS_PER_ROW = 4;
    const ROWS = genderList.length / CARDS_PER_ROW;

    // variables below are declared outside to avoid interrupting values at new loop
    let i = 0;
    let j = 0;

    for (j; j < ROWS; j++) {

        // prepare card printing by creating new zigzag row
        let div = document.createElement("DIV");
        div.setAttribute("class", "container");
        document.getElementById("men-container").appendChild(div);
        let ul = document.createElement("UL");
        ul.setAttribute("class", "zigzag-row");
        div.appendChild(ul);

        for (i; i < genderList.length; i++) {

            if (i % CARDS_PER_ROW != 0) { // insert card into existing row if "i" is not equal to card per row

                // insert card into row
                ul.innerHTML += "<li>" +
                    "<img onclick='viewArticle(" + genderList[i].get_id() + ")'src='img/res/men4.jpg'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + genderList[i].get_price() + CURRENCY_EURO + "</p>" +
                    "</li>";
            } else { // create new row if "i" is equal to card per row

                // prepare card printing by creating new zigzag row
                let newDiv = document.createElement("DIV");
                newDiv.setAttribute("class", "container");
                document.getElementById("men-container").appendChild(newDiv);
                let newUl = document.createElement("UL");
                newUl.setAttribute("class", "zigzag-row");
                newDiv.appendChild(newUl);

                // insert card into row
                newUl.innerHTML += "<li>" +
                    "<img onclick='viewArticle(" + genderList[i].get_id() + ")'src='img/res/men4.jpg'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + genderList[i].get_price() + CURRENCY_EURO + "</p>" +
                    "</li>";

                // declare new ul and div as default one to be executed on next iteration
                ul = newUl;
                div = newDiv;
            }
        }
    }
}

function insertArticlesIntoSale() { // diynamically insert articles into sale section 

    let articlesOnSaleList = getArticlesListOnSale();
    const CARDS_PER_ROW = 4;
    const ROWS = articlesOnSaleList.length / CARDS_PER_ROW;

    // variables below are declared outside to avoid interrupting values at new loop
    let i = 0;
    let j = 0;

    for (j; j < ROWS; j++) {

        // prepare card printing by creating new zigzag row
        let div = document.createElement("DIV");
        div.setAttribute("class", "container");
        document.getElementById("sale-container").appendChild(div);
        let ul = document.createElement("UL");
        ul.setAttribute("class", "zigzag-row");
        div.appendChild(ul);

        for (i; i < articlesOnSaleList.length; i++) {

            if (i % CARDS_PER_ROW != 0) { // insert card into existing row if "i" is not equal to card per row

                // insert card into row
                ul.innerHTML += "<li id=" + articlesOnSaleList[i].get_id() + ">" +
                    "<img onclick='viewArticle(" + articlesOnSaleList[i].get_id() + ")' src='img/res/slika10.png'>" +
                    "<p id='cardHeader'>" + articlesOnSaleList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + articlesOnSaleList[i].get_price() + CURRENCY_EURO + "</p>" +
                    "</li>";
            } else { // create new row if "i" is equal to card per row

                // prepare card printing by creating new zigzag row
                let newDiv = document.createElement("DIV");
                newDiv.setAttribute("class", "container");
                document.getElementById("sale-container").appendChild(newDiv);
                let newUl = document.createElement("UL");
                newUl.setAttribute("class", "zigzag-row");
                newDiv.appendChild(newUl);

                // insert card into row
                newUl.innerHTML += "<li id=" + articlesOnSaleList[i].get_id() + ">" +
                    "<img onclick='viewArticle(" + articlesOnSaleList[i].get_id() + ")' src='img/res/slika10.png'>" +
                    "<p id='cardHeader'>" + articlesOnSaleList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + articlesOnSaleList[i].get_price() + CURRENCY_EURO + "</p>" +
                    "</li>";

                // declare new ul and div as default one to be executed on next iteration
                ul = newUl;
                div = newDiv;
            }
        }
    }
}

function showInformationSection() { // change dom in order section (show/hide forms)
    // show information section and hide other sections
    document.getElementById("info-section").style.display = "flex";
    document.getElementById("payment-section").style.display = "none";
    document.getElementById("confirm-section").style.display = "none";

    document.getElementById("section-info-btn").style.color = "#333";
    document.getElementById("section-payment-btn").style.color = "rgb(180, 179, 179)";
    document.getElementById("section-confirm-btn").style.color = "rgb(180, 179, 179)";
}

function showPaymentSection() { // change dom in order section (show/hide forms)
    // show payment section and hide other sections
    document.getElementById("payment-section").style.display = "initial";
    document.getElementById("info-section").style.display = "none";
    document.getElementById("confirm-section").style.display = "none";

    document.getElementById("section-payment-btn").style.color = "#333";
    document.getElementById("section-confirm-btn").style.color = "rgb(180, 179, 179)";
    document.getElementById("section-info-btn").style.color = "rgb(180, 179, 179)";
}

function showConfirmSection() { // change dom in order section (show/hide forms)
    // show confirm section and hide other sections
    document.getElementById("confirm-section").style.display = "flex";
    document.getElementById("info-section").style.display = "none";
    document.getElementById("payment-section").style.display = "none";

    document.getElementById("section-confirm-btn").style.color = "#333";
    document.getElementById("section-payment-btn").style.color = "rgb(180, 179, 179)";
    document.getElementById("section-info-btn").style.color = "rgb(180, 179, 179)";

}

function showOrderConfirmationMsg() { // change dom in order section (show/hide forms)
    // show confirmation message section and hide other sections
    document.getElementById("order-confirmation-message").style.display = "initial";
    document.getElementById("confirm-section").style.display = "none";
    document.getElementById("info-section").style.display = "none";
    document.getElementById("payment-section").style.display = "none";

    document.getElementById("section-confirm-btn").style.color = "#333";
    document.getElementById("section-payment-btn").style.color = "rgb(180, 179, 179)";
    document.getElementById("section-info-btn").style.color = "rgb(180, 179, 179)";

}

function articlePreview(articleId) { // dynamically insert elements with specific article data

    let article = getArticleById(parseInt(articleId));
    let infoContainer = document.getElementById("info-container");

    // article title
    let title = document.createElement("H2");
    title.setAttribute("id", "article-title");
    title.innerHTML = article.get_name();
    infoContainer.appendChild(title);

    // article price
    let price = document.createElement("H3");
    price.setAttribute("id", "article-price");
    price.innerHTML = article.get_price() + CURRENCY_EURO;
    infoContainer.appendChild(price);

    // article details
    let details = document.createElement("p");
    details.setAttribute("id", "article-details");
    details.innerHTML = article.get_text();
    infoContainer.appendChild(details);

    // article cart form
    let cartForm = document.createElement("FORM");
    cartForm.setAttribute("class", "article-cart-form");
    cartForm.setAttribute("id", "cart-form");
    infoContainer.appendChild(cartForm);

    // article add to cart button in cart form
    let submit = document.createElement("BUTTON");
    submit.setAttribute("id", "article-submit-btn");
    submit.setAttribute("type", "button");
    submit.setAttribute("onclick", "handleCartList(" + article.get_id() + ")")
    submit.innerHTML = '<span>Add to Cart</span>';
    document.getElementById("cart-form").appendChild(submit);

    // div containing id info
    let id_info = document.createElement("DIV");
    id_info.setAttribute("class", "article-id-info");
    id_info.setAttribute("id", "id-info");
    infoContainer.appendChild(id_info);



    let extraDetails = document.createElement("P");
    extraDetails.setAttribute("id", "article-extra-details");
    extraDetails.innerHTML = article.get_extraText();
    document.getElementById("id-info").appendChild(extraDetails);
    // label for id
    let idLabel = document.createElement("label");
    idLabel.innerHTML = "Product No:";
    document.getElementById("id-info").appendChild(idLabel);

    // article id
    let id = document.createElement("P");
    id.setAttribute("id", "article-id");
    id.innerHTML = article.get_id();
    document.getElementById("id-info").appendChild(id);
}

function cartPreview() { // dynamically display articles from cart list

    for (let i = 0; i < cartArticles.length; i++) {
        // article-card
        let article = document.createElement("DIV");
        article.setAttribute("class", "card-article-card");
        article.innerHTML = "<div id='card-article-image-container'>" +
            "<img id='card-article-image' src='img/res/men-ac.jpg'> </div>" +
            " <div id='card-article-info'>" +
            "<h5 id='article-card-name'>" + cartArticles[i].get_name() + "</h5>" +
            "<div class='row'>" +
            "<p id='article-card-amount'>1<span>x</span></p>" +
            "<p id='article-card-price'>" + cartArticles[i].get_price() + CURRENCY_EURO + "</p> </div></div>";
        document.getElementById("cart-article-cards").appendChild(article);

    }

    // checkout total amount
    let totalAmount = 0;
    for (let j = 0; j < cartArticles.length; j++) {
        totalAmount += cartArticles[j].get_price();
    }
    // label
    let totalPriceLabel = document.createElement("P");
    totalPriceLabel.innerHTML = "TOTAL: ";
    document.getElementById("checkout-cart").appendChild(totalPriceLabel);

    // total price value
    let totalPrice = document.createElement("P");
    totalPrice.setAttribute("id", "total-price");
    totalPrice.innerHTML = totalAmount + CURRENCY_EURO;
    document.getElementById("checkout-cart").appendChild(totalPrice);
}




function cartPreviewMini() {

    makeMiniCartVisible();


    // clear earlier cart content 
    elements = document.getElementsByClassName("card-article-card");
    while (elements.length > 0) {
        elements[0].remove();
    }

    // get new data from cart
    for (let i = 0; i < cartArticles.length; i++) {
        // article-card
        let article = document.createElement("DIV");
        article.setAttribute("class", "card-article-card");
        article.setAttribute("data-id", cartArticles[i].get_id())
        article.innerHTML = "<div id='card-article-image-container'>" +
            "<img id='card-article-image' src='img/res/slika8.png'> </div>" +
            " <div id='card-article-info'>" +
            "<h5 id='article-card-name'>" + cartArticles[i].get_name() + "</h5>" +
            "<div class='row'>" +
            "<p id='article-card-price'>" + CURRENCY_EURO + cartArticles[i].get_price() +
            "<span>x</span>" +
            "<p id='article-card-amount'>1</p>" +
            "</p> </div></div>";
        document.getElementById("cart-article-cards-mini").appendChild(article);

    }

    // checkout total amount
    let totalAmount = 0;
    for (let j = 0; j < cartArticles.length; j++) {
        totalAmount += cartArticles[j].get_price();
    }



    // total price value

    document.getElementById("subtotal").innerHTML = CURRENCY_EURO + totalAmount;
    document.getElementById("taxes").innerHTML = CURRENCY_EURO + ARTICLE_TAX;
    document.getElementById("total-price").innerHTML = CURRENCY_EURO + (totalAmount + ARTICLE_TAX);
}

function makeMiniCartVisible() {
    document.getElementById("checkout-mini").style.display = "block";
}

function minimizeMiniCart() {
    document.getElementById("checkout-mini").style.display = "none";
}