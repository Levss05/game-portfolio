type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const PageContainer = ({ children, className = "" }: PageContainerProps) => {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-16 ${className}`}>
      {children}
    </section>
  );
};

export default PageContainer;
