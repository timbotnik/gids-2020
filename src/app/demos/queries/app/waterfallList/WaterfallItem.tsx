import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  WaterfallListItemQuery,
  WaterfallListItemQueryVariables,
} from "lib/graphql/types";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";

interface Props {
  id: string;
}

const waterfallListItemQuery = gql`
  query WaterfallListItemQuery($id: ID!) {
    waterfall(id: $id) {
      id
      name
      country
      imageUrl
    }
  }
`;

export function WaterfallListItem({ id }: Props) {
  const { data, loading } = useQuery<
    WaterfallListItemQuery,
    WaterfallListItemQueryVariables
  >(waterfallListItemQuery, {
    variables: {
      id,
    },
  });
  return (
    <div className="h-12 border-b border-gray-300 m-2 p-2 flex items-center justify-between">
      {loading ? (
        <LoadingSpinner className="w-full" />
      ) : (
        <>
          <img
            className="w-10 h-10 bg-gray-500 rounded"
            src={`${data?.waterfall?.imageUrl}`}
            alt={`${data?.waterfall?.name}`}
          />
          <div className="w-32 ml-4 flex-1">
            <div>{data?.waterfall?.name}</div>
            <div className="text-gray-500 text-sm">
              {data?.waterfall?.country}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
