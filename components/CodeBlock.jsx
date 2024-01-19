const CodeBlock= ({ quote, author }) => {
    return (
      <div className="CodeBlock">
        <p>{quote}</p>
        <p className="author">{author}</p>
      </div>
    );
  };
  
  export default CodeBlock;
  
  