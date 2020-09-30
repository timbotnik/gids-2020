import React from "react";
import { gql } from "@apollo/client";
import { WaterfallListItemFragment } from "lib/graphql/types";

interface Props {
  waterfall: WaterfallListItemFragment;
}

export const waterfallListItemFragment = gql`
  fragment WaterfallListItemFragment on Waterfall {
    id
    name
    country
    imageUrl
  }
`;

export function WaterfallListItem({ waterfall }: Props) {
  return (
    <div className="h-12 border-b border-gray-300 m-2 p-2 flex items-center justify-between">
      <img
        className="w-10 h-10 bg-gray-500 rounded"
        src={`${waterfall.imageUrl}`}
        alt={`${waterfall.name}`}
      />
      <div className="w-32 ml-4 flex-1">
        <div>{waterfall.name}</div>
        <div className="text-gray-500 text-sm">{waterfall.country}</div>
      </div>
    </div>
  );
}
