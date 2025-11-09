'use server';

/**
 * @fileOverview Analyzes project achievements and suggests relevant tags.
 *
 * - analyzeProjectTags - A function that takes project achievements as input and returns suggested tags.
 * - AnalyzeProjectTagsInput - The input type for the analyzeProjectTags function.
 * - AnalyzeProjectTagsOutput - The return type for the analyzeProjectTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Schema for a single project
const ProjectAchievementsSchema = z.object({
  id: z.string().describe('The unique identifier for the project.'),
  achievements: z
    .string()
    .describe('A list of achievements for a specific project.'),
});

// Input schema is now an array of projects
const AnalyzeProjectTagsInputSchema = z.object({
  projects: z.array(ProjectAchievementsSchema),
});
export type AnalyzeProjectTagsInput = z.infer<typeof AnalyzeProjectTagsInputSchema>;


// Schema for a single project's tags
const ProjectTagsSchema = z.object({
    id: z.string().describe('The unique identifier for the project.'),
    tags: z
        .array(z.string())
        .describe('An array of relevant tags for the project achievements.'),
});

// Output schema is now an array of project tags
const AnalyzeProjectTagsOutputSchema = z.object({
    projects: z.array(ProjectTagsSchema),
});
export type AnalyzeProjectTagsOutput = z.infer<typeof AnalyzeProjectTagsOutputSchema>;


export async function analyzeProjectTags(input: AnalyzeProjectTagsInput): Promise<AnalyzeProjectTagsOutput> {
  if (!input.projects || input.projects.length === 0) {
    return { projects: [] };
  }
  return analyzeProjectTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeProjectTagsPrompt',
  input: {schema: AnalyzeProjectTagsInputSchema},
  output: {schema: AnalyzeProjectTagsOutputSchema},
  prompt: `You are an expert in identifying relevant tags for project achievements.

  Given the following array of projects, analyze the achievements for each one and suggest an array of tags that best represent those achievements. The tags should be relevant to technology, industry, or project type.

  For each project in the input array, you must return a corresponding object in the output array with the project's original 'id' and the suggested 'tags'.

  Input Projects:
  {{#each projects}}
  - Project ID: {{{id}}}
    Achievements: {{{achievements}}}
  {{/each}}

  Your output must be a JSON object with a "projects" key, containing an array of objects, where each object has "id" and "tags" properties.
  `,
});

const analyzeProjectTagsFlow = ai.defineFlow(
  {
    name: 'analyzeProjectTagsFlow',
    inputSchema: AnalyzeProjectTagsInputSchema,
    outputSchema: AnalyzeProjectTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
