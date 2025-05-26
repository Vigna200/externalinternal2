function Car(){
    return(
        <div>
            <h1>Car Component</h1>
            <p>This is a car component.</p>
        </div>
    )
}
function Bike(){
    return(<div>
        <h1>Bike Component</h1>
        <p>This is a bike component.</p>
        <Car/>
    </div>
    )
}
export { Bike as Slim };
export default  Car;