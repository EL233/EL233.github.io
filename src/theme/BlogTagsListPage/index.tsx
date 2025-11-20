import React from 'react';
import BlogLayout from '@theme/BlogLayout';

interface Tag {
  label: string;
  permalink: string;
  count: number;
}

interface BlogTagsListPageProps {
  tags: Record<string, Tag>;
}

function BlogTagsListPageContent({tags}: {tags: Record<string, Tag>}) {
  // 按字母顺序排序标签
  const sortedTags = Object.values(tags).sort((a, b) => 
    a.label.localeCompare(b.label)
  );
  
  // 找出最大和最小使用次数，用于字体大小缩放
  const maxCount = Math.max(...sortedTags.map(tag => tag.count));
  const minCount = Math.min(...sortedTags.map(tag => tag.count));
  
  // 计算字体大小 (12px - 24px)
  const getFontSize = (count: number) => {
    if (maxCount === minCount) return '16px';
    const ratio = (count - minCount) / (maxCount - minCount);
    return `${12 + ratio * 12}px`;
  };
  
  return (
    <div className="blog-tags-list-page">
      <h1>Tags</h1>
      <div className="blog-tags-cloud">
        {sortedTags.map((tag) => (
          <a
            key={tag.permalink}
            href={tag.permalink}
            className="blog-tag-cloud-item"
            style={{
              fontSize: getFontSize(tag.count),
              color: 'var(--ifm-color-primary)',
            }}
            title={`${tag.label} (${tag.count} posts)`}
          >
            {tag.label}
            <span className="tag-count">{tag.count}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function BlogTagsListPage(props: BlogTagsListPageProps) {
  const {tags} = props;
  const title = 'Tags';
  
  return (
    <BlogLayout title={title} description="All blog tags">
      <BlogTagsListPageContent tags={tags} />
    </BlogLayout>
  );
}