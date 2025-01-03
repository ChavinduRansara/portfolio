import Typewriter from 'typewriter-effect';

const titles = [
  'Computer Science Engineer',
  'Full-Stack Developer',
  'Tech Enthusiast',
];

export default function AnimatedText() {
  return (
    <span className="text-indigo-600 dark:text-indigo-400">
      <Typewriter
        options={{
          strings: titles,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          
        }}
      />
    </span>
  );
}