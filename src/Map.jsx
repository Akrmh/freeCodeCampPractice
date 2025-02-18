

const Map = () => {

    const nums = [1, 2, 3, 4, 5]
    const squ = nums.map(function(num){
        return num * num
    })

    const names = ["akrmh", "ali", "ragd", "rudina"]
    const capitalized = names.map((name)=>{
        return name[0].toUpperCase() + name.slice(1)
    })

    const pokemon = ["Bulbasaur", "Charmander", "Squirtel"]
    const pargraphs = pokemon.map(mon => `<p>${mon}</p>`
    )

  return (
    // console.log(squ)
    // console.log(capitalized)

    console.log(pargraphs)


  )
}

export default Map