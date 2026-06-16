////Props bilan//////////
// function Navbar(props) {
//     return(
//     <navbar>
//         <div>
//             <h1>{props.name}</h1>
//             <p>yosh: {props.age}</p>
//             <p>kasb: {props.job}</p>
//         </div>
//     </navbar>
//     )
// }
// export default Navbar

////Destructuring////
function Navbar({name,age,job}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>age: {age}</p>
            <p>job: {job}</p>
        </div>
    )
}
export default Navbar