// import stripe using a user id // this is the test example id given on the web docs
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const sessionId = async function() {

    // must call this for every product in cart then create a price for this product using the generated product.id
    const product = await stripe.products.create({
        name: "Soup",
        descriptiom: "Tasty",
    });

    // once a product.id is created give the product a price with this call
    const price = await stripe.prices.create({
        product: product.id,
        // the unit is the smallest unit of currency aka cents
        unit_amount: 289, // $2.89
        currency: "cad"
    });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{
            price: price.id,
            quantity: 1,
        }, ],
        mode: "payment",
        success_url: "https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "https://example.com/cancel",
    });

    console.log(session.id);
};

sessionId();