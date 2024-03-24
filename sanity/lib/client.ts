import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skh44TjY2CTsRDG5b1Y7XOjOEfjWN1kDMpjN4l5rPVOjQZakfeufp1RonBaYI9gmAfhuyBd91YOCJrERvj0epkw284cAjRuLhq4KH0rxxef5GtYIUTihc2wzP3nYwzTNUX4iyeqQJtanDAjl6t9n0hxcdpqB7F66CaJ7uKXyNvO8PeeGSp4B"
})
