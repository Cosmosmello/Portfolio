const CodeBlock = ({ quote, author }) => {
    return (
      <div className="codeblock">
        <p>{quote}</p>
        <p className="author">{author}</p>
      </div>
    );
  };
  
  export default CodeBlock;
  
  