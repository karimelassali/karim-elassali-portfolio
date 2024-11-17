import IconCloud from "./ui/icon-cloud";
import SparklesText from "./ui/sparkles-text";


const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "postgresql",
  "nginx",
  "vercel",
  "testinglibrary",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "androidstudio",
  'netlify',
  'next js',
  'mysql',
  'php',
  'gemini',
  'supabase',
  'shadcn',
  'api'
];
const Skills = () => {
    return (
        <div className="w-full h-[500px]" >
            <SparklesText className="text-center " text="My Digital Toolkit" sparklesCount={30} />
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

export default Skills;


