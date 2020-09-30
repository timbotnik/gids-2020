import React from "react";
import { gql, useQuery } from "@apollo/client";
import { WaterfallListItem } from "./waterfallList/WaterfallItem";
import { LoadingSpinner } from "@apollo/space-kit/Loaders/LoadingSpinner";
import { WaterfallListQuery } from "lib/graphql/types";

const waterfallListQuery = gql`
  query WaterfallListQuery {
    waterfalls {
      id
    }
  }
`;

export function WaterfallList() {
  const { data, loading } = useQuery<WaterfallListQuery>(waterfallListQuery);
  return loading ? (
    <div className="flex-1 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="overflow-y-auto">
      {data?.waterfalls.map((waterfall) => (
        <WaterfallListItem key={waterfall.id} id={waterfall.id} />
      ))}
    </div>
  );
}
