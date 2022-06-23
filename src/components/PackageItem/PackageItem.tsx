import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Text from 'components/Text';

export interface PackageItemProps {
  name: string;
  description: React.ReactNode;
}

const PackageItem = ({ name, description }: PackageItemProps) => {
  return (
    <a
      className="bg-gray-200 dark:bg-gray-700 h-20 flex-1 rounded-md flex overflow-hidden"
      href={`https://www.npmjs.com/package/${name}`}
      target="_blank"
      rel="noopener noreferer">
      <div className="w-20">
        <StaticImage
          src="../../assets/images/npm.png"
          alt="NPM Icon"
          className="h-full"
        />
      </div>
      <div className="flex-1 flex justify-center flex-col px-2">
        <Text className="no-underline">{name}</Text>
        <p className="text-gray-500 dark:text-gray-400 text-xs leading-3 no-underline">
          {description}
        </p>
      </div>
    </a>
  );
};

export default PackageItem;
