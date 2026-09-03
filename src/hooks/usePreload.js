import { useEffect, useState } from 'react';

const usePreload = (resources = []) => {
  const [loadedResources, setLoadedResources] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (resources.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const totalResources = resources.length;

    const handleLoad = (resource) => {
      loadedCount++;
      setLoadedResources(prev => new Set([...prev, resource]));
      
      if (loadedCount === totalResources) {
        setIsLoading(false);
      }
    };

    const handleError = (resource) => {
      console.warn(`Failed to preload resource: ${resource}`);
      loadedCount++;
      
      if (loadedCount === totalResources) {
        setIsLoading(false);
      }
    };

    resources.forEach(resource => {
      if (typeof resource === 'string' && (resource.includes('.jpg') || resource.includes('.png') || resource.includes('.webp'))) {
        const img = new Image();
        img.onload = () => handleLoad(resource);
        img.onerror = () => handleError(resource);
        img.src = resource;
      } else if (typeof resource === 'string' && resource.includes('.css')) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        link.onload = () => handleLoad(resource);
        link.onerror = () => handleError(resource);
        document.head.appendChild(link);
      }
    });

    return () => {};
  }, [resources]);

  return { loadedResources, isLoading };
};

export default usePreload;
