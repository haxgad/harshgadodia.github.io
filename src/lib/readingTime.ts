const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, '').trim();
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
