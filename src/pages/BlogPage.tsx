import { Helmet } from 'react-helmet-async';

export function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - VBSP Consulting</title>
        <meta name="description" content="Read the latest insights on digital transformation, technology trends, and business growth strategies." />
        <link rel="canonical" href="https://vbsp.consulting/blog" />
      </Helmet>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Blog</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog posts will be added here */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600">Our blog is being updated with fresh content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}