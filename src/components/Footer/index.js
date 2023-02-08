import "./index.css";

function Footer({vishions}) {
    let date = new Date().getFullYear();
    // console.log(`
    // \u00A9 ${date} Edwin M. Escobar
    // https://github.com/escowin/vishions-atx
    // `)

    return (
        <footer>&copy;{date} {vishions.name}</footer>
    )
}

export default Footer