import "./MyWords.scss";
import { Heading } from "../../styles/typography/Heading";
import { articles } from "./myWordsData"; // Import the articles array
import { MyWordCard } from "./MyWordCard";

export const MyWords = () => {
  return (
    <article className="article-container">
      <Heading level={2} text="My Words" className="article-heading" />
      <div className="article-list">
        {articles.map((article, index) => (
          <MyWordCard
            key={index}
            title={article.title}
            imageUrl={article.imageUrl}
            tagText={article.tagText}
            description={article.description}
            link={article.link}
          />
        ))}
      </div>
    </article>
  );
};
