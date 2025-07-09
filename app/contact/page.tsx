import Image from 'next/image';
import React from 'react'

const Contact = async () => {

  const response = await fetch('https://pokeapi.co/api/v2/pokedex/kanto/');
  const data = await response.json();
  console.log(data.pokemon_entries);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {data.pokemon_entries.map((el: any) => {
      return (
        <div key={el.entry_number} className="flex flex-col items-center bg-gray-800 rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2 capitalize">{el.pokemon_species.name}</h2>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${el.entry_number}.svg`}
          alt={el.pokemon_species.name}
          width={96}
          height={96}
          style={{ width: "100px", height: "120px" }}
          priority
        />
        </div>
      )
      })}
    </div>
  )
}

export default Contact