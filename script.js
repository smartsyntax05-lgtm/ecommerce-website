/* =====================================================
   SHOP EASY - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   PRODUCTS
===================================================== */

const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        price: 999,
        category: "Electronics",
        icon: "🎧"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 1999,
        category: "Electronics",
        icon: "⌚"
    },

    {
        id: 3,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        icon: "💻"
    },

    {
        id: 4,
        name: "Smartphone",
        price: 24999,
        category: "Electronics",
        icon: "📱"
    },

    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 1499,
        category: "Electronics",
        icon: "🔊"
    },

    {
        id: 6,
        name: "Wireless Mouse",
        price: 699,
        category: "Electronics",
        icon: "🖱️"
    },

    {
        id: 7,
        name: "Mechanical Keyboard",
        price: 2499,
        category: "Electronics",
        icon: "⌨️"
    },

    {
        id: 8,
        name: "Power Bank",
        price: 1199,
        category: "Electronics",
        icon: "🔋"
    },


    {
        id: 9,
        name: "Cotton T-Shirt",
        price: 499,
        category: "Fashion",
        icon: "👕"
    },

    {
        id: 10,
        name: "Denim Jeans",
        price: 1299,
        category: "Fashion",
        icon: "👖"
    },

    {
        id: 11,
        name: "Hoodie",
        price: 999,
        category: "Fashion",
        icon: "🧥"
    },

    {
        id: 12,
        name: "Running Shoes",
        price: 1499,
        category: "Fashion",
        icon: "👟"
    },

    {
        id: 13,
        name: "Sports T-Shirt",
        price: 699,
        category: "Fashion",
        icon: "👕"
    },

    {
        id: 14,
        name: "Casual Shirt",
        price: 899,
        category: "Fashion",
        icon: "👔"
    },

    {
        id: 15,
        name: "Women's Handbag",
        price: 1599,
        category: "Fashion",
        icon: "👜"
    },

    {
        id: 16,
        name: "Sunglasses",
        price: 799,
        category: "Fashion",
        icon: "🕶️"
    },


    {
        id: 17,
        name: "School Backpack",
        price: 1299,
        category: "Accessories",
        icon: "🎒"
    },

    {
        id: 18,
        name: "Leather Wallet",
        price: 599,
        category: "Accessories",
        icon: "👛"
    },

    {
        id: 19,
        name: "Travel Bag",
        price: 1899,
        category: "Accessories",
        icon: "🧳"
    },

    {
        id: 20,
        name: "Baseball Cap",
        price: 399,
        category: "Accessories",
        icon: "🧢"
    },

    {
        id: 21,
        name: "Wrist Band",
        price: 299,
        category: "Accessories",
        icon: "⌚"
    },

    {
        id: 22,
        name: "Key Chain",
        price: 199,
        category: "Accessories",
        icon: "🔑"
    },


    {
        id: 23,
        name: "Coffee Mug",
        price: 299,
        category: "Home",
        icon: "☕"
    },

    {
        id: 24,
        name: "Table Lamp",
        price: 899,
        category: "Home",
        icon: "💡"
    },

    {
        id: 25,
        name: "Wall Clock",
        price: 699,
        category: "Home",
        icon: "🕐"
    },

    {
        id: 26,
        name: "Water Bottle",
        price: 499,
        category: "Home",
        icon: "🍶"
    },

    {
        id: 27,
        name: "Cushion Set",
        price: 799,
        category: "Home",
        icon: "🛋️"
    },

    {
        id: 28,
        name: "Desk Organizer",
        price: 349,
        category: "Home",
        icon: "📦"
    }

];


/* =====================================================
   LOCAL STORAGE
===================================================== */

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart") || "[]"
    );

}


function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


function getOrders() {

    return JSON.parse(
        localStorage.getItem("orders") || "[]"
    );

}


function money(amount) {

    return "₹" +
        Number(amount)
        .toLocaleString("en-IN");

}


/* =====================================================
   NAVIGATION
===================================================== */

function buildNav() {

    const nav =
        document.getElementById("nav");

    if (!nav) return;


    const cart =
        getCart().length;


    const logged =
        localStorage.getItem("loggedIn")
        === "true";


    nav.innerHTML = `

        <a href="index.html">
            Home
        </a>

        <a href="products.html">
            Products
        </a>

        <a href="search.html">
            Search
        </a>

        <a href="profile.html">
            Profile
        </a>

        <a href="orders.html">
            Orders
        </a>

        <a href="cart.html">
            Cart 🛒
            <span class="cart-count">
                ${cart}
            </span>
        </a>

        ${
            logged

            ?

            `<a href="#" id="logoutLink">
                Logout
             </a>`

            :

            `<a href="login.html">
                Login
             </a>`
        }

    `;


    const logout =
        document.getElementById(
            "logoutLink"
        );


    if (logout) {

        logout.onclick = function(event) {

            event.preventDefault();

            localStorage.removeItem(
                "loggedIn"
            );

            location.href =
                "index.html";

        };

    }

}


/* =====================================================
   MESSAGE
===================================================== */

function showMessage(
    id,
    text,
    success = false
) {

    const element =
        document.getElementById(id);


    if (!element) return;


    element.textContent = text;


    element.style.color =
        success
        ? "#15803d"
        : "#dc2626";

}


/* =====================================================
   REGISTER
===================================================== */

const registerForm =
    document.getElementById(
        "registerForm"
    );


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const firstName =
                document.getElementById(
                    "firstName"
                ).value.trim();


            const lastName =
                document.getElementById(
                    "lastName"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value
                .trim()
                .toLowerCase();


            const password =
                document.getElementById(
                    "password"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            if (
                !/^[A-Za-z]+$/.test(
                    firstName
                )
            ) {

                showMessage(
                    "registerMessage",
                    "First name must contain alphabets only."
                );

                return;
            }


            if (
                !/^[A-Za-z]+$/.test(
                    lastName
                )
            ) {

                showMessage(
                    "registerMessage",
                    "Last name must contain alphabets only."
                );

                return;
            }


            if (password.length < 6) {

                showMessage(
                    "registerMessage",
                    "Password must contain at least 6 characters."
                );

                return;
            }


            if (
                password !==
                confirmPassword
            ) {

                showMessage(
                    "registerMessage",
                    "Passwords do not match."
                );

                return;
            }


            const user = {

                firstName:
                    firstName,

                lastName:
                    lastName,

                email:
                    email,

                password:
                    password

            };


            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );


            showMessage(
                "registerMessage",
                "Registration successful! Redirecting...",
                true
            );


            setTimeout(
                function() {

                    location.href =
                        "login.html";

                },
                1000
            );

        }
    );

}


/* =====================================================
   LOGIN
===================================================== */

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value
                .trim()
                .toLowerCase();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const user =
                JSON.parse(
                    localStorage.getItem(
                        "user"
                    ) || "null"
                );


            if (!user) {

                showMessage(
                    "loginMessage",
                    "No account found. Please register first."
                );

                return;
            }


            if (
                email === user.email &&
                password === user.password
            ) {

                localStorage.setItem(
                    "loggedIn",
                    "true"
                );


                showMessage(
                    "loginMessage",
                    "Login successful!",
                    true
                );


                setTimeout(
                    function() {

                        location.href =
                            "products.html";

                    },
                    700
                );

            }

            else {

                showMessage(
                    "loginMessage",
                    "Invalid email or password."
                );

            }

        }
    );

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function renderProducts(
    list,
    targetId = "productList"
) {

    const target =
        document.getElementById(
            targetId
        );


    if (!target) return;


    if (list.length === 0) {

        target.innerHTML = `

            <div class="cart-item">

                <h3>
                    No products found.
                </h3>

            </div>

        `;

        return;
    }


    target.innerHTML =

        list.map(function(product) {

            return `

                <div class="product">

                    <div class="product-icon">
                        ${product.icon}
                    </div>

                    <h3>
                        ${product.name}
                    </h3>

                    <div class="category-name">
                        ${product.category}
                    </div>

                    <div class="price">
                        ${money(product.price)}
                    </div>

                    <button
                        class="btn small"
                        onclick="addToCart(${product.id})">

                        🛒 Add to Cart

                    </button>

                </div>

            `;

        }).join("");

}


/* =====================================================
   PRODUCTS PAGE
===================================================== */

function initProducts() {

    const productList =
        document.getElementById(
            "productList"
        );


    if (!productList) return;


    renderProducts(products);


    const buttons =
        document.querySelectorAll(
            ".category"
        );


    buttons.forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    buttons.forEach(
                        function(btn) {

                            btn.classList
                                .remove(
                                    "active"
                                );

                        }
                    );


                    button.classList
                        .add("active");


                    const category =
                        button.dataset
                        .category;


                    if (
                        category ===
                        "All"
                    ) {

                        renderProducts(
                            products
                        );

                    }

                    else {

                        const filtered =
                            products.filter(
                                function(product) {

                                    return (
                                        product.category
                                        ===
                                        category
                                    );

                                }
                            );


                        renderProducts(
                            filtered
                        );

                    }

                }
            );

        }
    );

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(id) {

    const product =
        products.find(
            function(product) {

                return product.id === id;

            }
        );


    if (!product) return;


    const cart =
        getCart();


    cart.push(product);


    saveCart(cart);


    buildNav();


    alert(
        product.name +
        " added to cart!"
    );

}


/* =====================================================
   CART
===================================================== */

function renderCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const summary =
        document.getElementById(
            "cartSummary"
        );


    if (!cartItems) return;


    const cart =
        getCart();


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="cart-item">

                <h3>
                    Your cart is empty.
                </h3>

                <a
                    href="products.html"
                    class="btn">

                    Continue Shopping

                </a>

            </div>

        `;


        summary.innerHTML = "";


        return;

    }


    cartItems.innerHTML =

        cart.map(
            function(product, index) {

                return `

                    <div class="cart-item">

                        <div class="cart-row">

                            <div>

                                <div
                                    style="font-size:35px">

                                    ${product.icon}

                                </div>

                                <h3>
                                    ${product.name}
                                </h3>

                                <p class="muted">

                                    ${product.category}

                                </p>

                                <strong>

                                    ${money(
                                        product.price
                                    )}

                                </strong>

                            </div>


                            <button
                                class="btn danger small"
                                onclick="removeFromCart(${index})">

                                Remove

                            </button>

                        </div>

                    </div>

                `;

            }
        ).join("");


    const total =
        cart.reduce(
            function(sum, product) {

                return sum +
                    product.price;

            },
            0
        );


    summary.innerHTML = `

        <h2>
            Total: ${money(total)}
        </h2>

        <br>

        <a
            href="products.html"
            class="btn">

            Continue Shopping

        </a>

        <a
            href="checkout.html"
            class="btn secondary">

            Proceed to Checkout

        </a>

    `;

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(index) {

    const cart =
        getCart();


    cart.splice(
        index,
        1
    );


    saveCart(cart);


    buildNav();


    renderCart();

}


/* =====================================================
   SEARCH
===================================================== */

function initSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) return;


    function searchProducts() {

        const searchText =
            input.value
            .trim()
            .toLowerCase();


        const results =
            products.filter(
                function(product) {

                    return (

                        product.name
                            .toLowerCase()
                            .includes(
                                searchText
                            )

                        ||

                        product.category
                            .toLowerCase()
                            .includes(
                                searchText
                            )

                    );

                }
            );


        renderProducts(
            results,
            "searchResults"
        );

    }


    input.addEventListener(
        "input",
        searchProducts
    );


    searchProducts();

}


/* =====================================================
   CHECKOUT
===================================================== */

function initCheckout() {

    const form =
        document.getElementById(
            "checkoutForm"
        );


    if (!form) return;


    const cart =
        getCart();


    const total =
        cart.reduce(
            function(sum, product) {

                return sum +
                    product.price;

            },
            0
        );


    const totalElement =
        document.getElementById(
            "checkoutTotal"
        );


    if (cart.length > 0) {

        totalElement.textContent =
            "Order Total: " +
            money(total);

    }

    else {

        totalElement.textContent =
            "Your cart is empty.";

    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const currentCart =
                getCart();


            if (
                currentCart.length === 0
            ) {

                showMessage(
                    "checkoutMessage",
                    "Your cart is empty."
                );

                return;

            }


            const order = {

                id:
                    "ORD" +
                    Date.now()
                    .toString()
                    .slice(-7),

                customerName:
                    document.getElementById(
                        "customerName"
                    ).value.trim(),

                mobile:
                    document.getElementById(
                        "mobile"
                    ).value.trim(),

                address:
                    document.getElementById(
                        "address"
                    ).value.trim(),

                payment:
                    document.getElementById(
                        "paymentMethod"
                    ).value,

                products:
                    currentCart,

                total:
                    currentCart.reduce(
                        function(sum, product) {

                            return sum +
                                product.price;

                        },
                        0
                    ),

                date:
                    new Date()
                    .toLocaleString(
                        "en-IN"
                    ),

                status:
                    "Order Placed"

            };


            const orders =
                getOrders();


            orders.unshift(
                order
            );


            localStorage.setItem(
                "orders",
                JSON.stringify(
                    orders
                )
            );


            saveCart([]);


            buildNav();


            showMessage(
                "checkoutMessage",
                "Order placed successfully! Order ID: " +
                order.id,
                true
            );


            form.reset();


            setTimeout(
                function() {

                    location.href =
                        "orders.html";

                },
                1200
            );

        }
    );

}


/* =====================================================
   PROFILE
===================================================== */

function initProfile() {

    const form =
        document.getElementById(
            "profileForm"
        );


    if (!form) return;


    const user =
        JSON.parse(
            localStorage.getItem(
                "user"
            ) || "null"
        );


    const profile =
        JSON.parse(
            localStorage.getItem(
                "profile"
            ) || "null"
        );


    if (profile) {

        document.getElementById(
            "profileName"
        ).value =
            profile.name || "";


        document.getElementById(
            "profileEmail"
        ).value =
            profile.email || "";


        document.getElementById(
            "profileMobile"
        ).value =
            profile.mobile || "";


        document.getElementById(
            "profileAddress"
        ).value =
            profile.address || "";

    }

    else if (user) {

        document.getElementById(
            "profileName"
        ).value =
            user.firstName +
            " " +
            user.lastName;


        document.getElementById(
            "profileEmail"
        ).value =
            user.email;

    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const profileData = {

                name:
                    document.getElementById(
                        "profileName"
                    ).value.trim(),

                email:
                    document.getElementById(
                        "profileEmail"
                    ).value.trim(),

                mobile:
                    document.getElementById(
                        "profileMobile"
                    ).value.trim(),

                address:
                    document.getElementById(
                        "profileAddress"
                    ).value.trim()

            };


            localStorage.setItem(
                "profile",
                JSON.stringify(
                    profileData
                )
            );


            showMessage(
                "profileMessage",
                "Profile updated successfully!",
                true
            );

        }
    );

}


/* =====================================================
   ORDERS
===================================================== */

function renderOrders() {

    const orderList =
        document.getElementById(
            "orderList"
        );


    if (!orderList) return;


    const orders =
        getOrders();


    if (orders.length === 0) {

        orderList.innerHTML = `

            <div class="order">

                <h3>
                    No orders yet.
                </h3>

                <a
                    href="products.html"
                    class="btn">

                    Start Shopping

                </a>

            </div>

        `;

        return;

    }


    orderList.innerHTML =

        orders.map(
            function(order) {

                return `

                    <div class="order">

                        <div
                            style="
                            display:flex;
                            justify-content:space-between;
                            gap:15px;
                            flex-wrap:wrap;
                            ">

                            <h2>
                                ${order.id}
                            </h2>

                            <span class="status">

                                ${order.status}

                            </span>

                        </div>


                        <p>
                            <strong>Date:</strong>
                            ${order.date}
                        </p>


                        <p>
                            <strong>Customer:</strong>
                            ${order.customerName}
                        </p>


                        <p>
                            <strong>Payment:</strong>
                            ${order.payment}
                        </p>


                        <p>
                            <strong>Address:</strong>
                            ${order.address}
                        </p>


                        <p>
                            <strong>Total:</strong>
                            ${money(order.total)}
                        </p>


                        <div
                            class="order-products">

                            <strong>
                                Products:
                            </strong>


                            ${
                                order.products
                                .map(
                                    function(product) {

                                        return `

                                            <div>

                                                ${product.icon}

                                                ${product.name}

                                                —

                                                ${money(
                                                    product.price
                                                )}

                                            </div>

                                        `;

                                    }
                                )
                                .join("")
                            }

                        </div>

                    </div>

                `;

            }
        ).join("");

}


/* =====================================================
   START APPLICATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        buildNav();

        initProducts();

        renderCart();

        initSearch();

        initCheckout();

        initProfile();

        renderOrders();

    }
);