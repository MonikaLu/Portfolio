import Image from 'next/image';

export function ProjectContainer() {
  return (
    <div className="w-full border border-solid border-teal-300 p-3">
      <div className="flex w-full flex-row justify-between">
        <h1 className="text-xl">ProjectName</h1>
        <h3 className="text-lg">Time</h3>
      </div>
      <h4 className="text-md">Organization</h4>
      <div className="flex flex-row">
        <Image
          src="/monika_luu_profile.png"
          width={200}
          height={200}
          alt={'Picture of the project'}
        />
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
          aliquam ut porttitor leo. Mi ipsum faucibus vitae aliquet nec
          ullamcorper sit. Nulla aliquet porttitor lacus luctus. Enim eu turpis
          egestas pretium. Sed viverra tellus in hac habitasse platea dictumst
          vestibulum rhoncus. Rhoncus dolor purus non enim. Enim lobortis
          scelerisque fermentum dui faucibus in ornare quam viverra. Odio aenean
          sed adipiscing diam donec adipiscing tristique risus. Tempor id eu
          nisl nunc mi. Gravida in fermentum et sollicitudin ac. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Mollis aliquam ut
          porttitor leo. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.
          Nulla aliquet porttitor lacus luctus. Enim eu turpis egestas pretium.
          Sed viverra tellus in hac habitasse platea dictumst vestibulum
          rhoncus. Rhoncus dolor purus non enim. Enim lobortis scelerisque
          fermentum dui faucibus in ornare quam viverra. Odio aenean sed
          adipiscing diam donec adipiscing tristique risus. Tempor id eu nisl
          nunc mi. Gravida in fermentum et sollicitudin ac.
        </p>
      </div>
      <h4>Technologies</h4>
      <ul>
        <li>Tech1</li>
        <li>Tech2</li>
      </ul>
    </div>
  );
}
