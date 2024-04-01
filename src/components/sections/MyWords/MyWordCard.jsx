import "./MyWords.scss";
import { Heading } from "../../styles/typography/Heading";
import { Image } from "../../styles/images/Image";
import { ReadArticleIcon } from "../../../assets/Icons";
import { Paragraph } from "../../styles/typography/Paragraph";
import { Tag } from "../../styles/typography/Tag";
import { Button } from "../../styles/button/Button";

export const MyWordCard = ({ title, imageUrl, tagText, description, link }) => {
  return (
    <div className="article-card">
      <div className="article-img-container">
        <Image
          sectionClassName={"article-img"}
          elementClassName={"article-img"}
          link={imageUrl} // Use the passed imageUrl
          ImageAltText={title} // Use the title as alt text
        />
      </div>
      <div className="article-text">
        <Tag tagText={tagText} className="article-tag" />
        <Heading
          level={3}
          text={title}
          aria-label="This is the main heading"
          className="give-it-a-name"
        />
      </div>
      <Paragraph text={description} />
      <Button
        icon={<ReadArticleIcon />}
        label="Read article"
        link={link}
        className="article-btn"
      />
    </div>
  );
};
