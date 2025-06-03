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

const AnalyzeProjectTagsInputSchema = z.object({
  achievements: z
    .string()
    .describe('A list of achievements for a specific project.'),
});
export type AnalyzeProjectTagsInput = z.infer<typeof AnalyzeProjectTagsInputSchema>;

const AnalyzeProjectTagsOutputSchema = z.object({
  tags: z
    .array(z.string())
    .describe('An array of relevant tags for the project achievements.'),
});
export type AnalyzeProjectTagsOutput = z.infer<typeof AnalyzeProjectTagsOutputSchema>;

export async function analyzeProjectTags(input: AnalyzeProjectTagsInput): Promise<AnalyzeProjectTagsOutput> {
  return analyzeProjectTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeProjectTagsPrompt',
  input: {schema: AnalyzeProjectTagsInputSchema},
  output: {schema: AnalyzeProjectTagsOutputSchema},
  prompt: `You are an expert in identifying relevant tags for project achievements.

  Given the following project achievements, suggest an array of tags that best represent these achievements. The tags should be relevant to technology, industry, or project type.

  Achievements: {{{achievements}}}

  Your output should be a JSON array of strings.
  `, // Ensure output is a JSON array of strings
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
