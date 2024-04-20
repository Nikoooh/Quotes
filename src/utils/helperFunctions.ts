import { QuoteType } from "../App";

export const filterQuote = ( quoteData: any ): QuoteType => {
  const filteredQuote: QuoteType = {
    author: quoteData.author || '',
    content: quoteData.content || '',
    tags: quoteData.tags || [],
  };
  return filteredQuote;
};