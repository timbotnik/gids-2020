import React from "react";
import { gql, useQuery } from "@apollo/client";
import { WaterfallListQuery2 } from "lib/graphql/types";
import {
  WaterfallListItem,
  waterfallListItemFragment,
} from "./waterfallList/WaterfallItem";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";

const waterfallListQuery = gql`
  query WaterfallListQuery2 {
    waterfalls {
      ...WaterfallListItemFragment
    }
  }
  ${waterfallListItemFragment}
`;

export function WaterfallList() {
  const { data, loading } = useQuery<WaterfallListQuery2>(waterfallListQuery);
  return loading ? (
    <div className="flex-1 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="overflow-y-auto">
      {data?.waterfalls.map((waterfall) => (
        <WaterfallListItem key={waterfall.id} waterfall={waterfall} />
      ))}
    </div>
  );
}
