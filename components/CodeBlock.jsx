const Codeblock= ({ quote, author }) => {
    return (
      <div className="Codeblock">
        <p>{quote}</p>
        <p className="author">{author}</p>
      </div>
    );
  };
  
  export default Codeblock;
  
  