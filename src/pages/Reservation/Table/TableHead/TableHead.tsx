function TableHead({ HeadElements }: { HeadElements: string[] }) {
  const renderHeadElements = () => {
    return HeadElements.map((item, i) => {
      return <th key={i}>{item}</th>;
    });
  };
  return (
    <thead>
      <tr>{renderHeadElements()}</tr>
    </thead>
  );
}

export default TableHead;
