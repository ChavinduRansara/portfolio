import Typewriter from 'typewriter-effect';

const titles = [
  'Computer Science Engineer',
  'Software Developer',
  'Full-Stack Developer',
];

export default function AnimatedText() {
  return (
    <span className="text-indigo-600 dark:text-indigo-400">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(titles[0])
            .pauseFor(5000)
            .deleteAll()
            .typeString(titles[1])
            .pauseFor(2000)
            .deleteAll()
            .typeString(titles[2])
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </span>
  );
}
