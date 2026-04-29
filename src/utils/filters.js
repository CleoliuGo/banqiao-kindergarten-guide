export function filterKindergartens(kindergartens, filters) {
  return kindergartens.filter((school) => {
    if (filters.type !== "all" && school.type !== filters.type) {
      return false;
    }

    if (filters.distance !== "all") {
      const limit = Number(filters.distance);
      const nearestDistance = Math.min(
        school.distance.guanyun.km,
        school.distance.champagne.km,
      );

      if (nearestDistance > limit) {
        return false;
      }
    }

    if (filters.rating !== "all") {
      const threshold = Number(filters.rating);
      if (!school.rating || school.rating < threshold) {
        return false;
      }
    }

    if (filters.query.trim()) {
      const query = filters.query.trim().toLowerCase();
      const haystack = [
        school.name,
        school.address,
        school.teachingModel,
        school.pickSummary,
      ]
        .join(" ")
        .toLowerCase();

      if (!haystack.includes(query)) {
        return false;
      }
    }

    return true;
  });
}
