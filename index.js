// use the semantic nav element as the parent wrapper
// Have an h1 element with the brand name of your "website"
// Insert an unordered list for the other nav elements
// Inside the ul, have three lis for "pricing', 'about' and 'contact'
// don't worry about styling yet - it'll just be plain-looking html for now

const page = (
    <nav>
        <h1>Origami by Beva</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    page,
    document.getElementById("root")
);