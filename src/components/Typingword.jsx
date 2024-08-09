import { TypeAnimation } from 'react-type-animation';

export default function Typingword(){
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'UI/UX Designer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Graphic Designer',
        1000,
        'Digital Marketer',
        1000,
        'Video Editor',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};