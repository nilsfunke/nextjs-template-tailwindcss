const splitText = (text: string): string[] => {
  if (!text || text === '') return [];

  return text.split('\\n');
};

export { splitText };
