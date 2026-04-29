function getDistanceByBasis(school, basis) {
  if (basis === "guanyun") {
    return school.distance.guanyun.km;
  }

  if (basis === "champagne") {
    return school.distance.champagne.km;
  }

  return Math.min(school.distance.guanyun.km, school.distance.champagne.km);
}

function getVacancyScore(school) {
  if (!school.vacancy) {
    return -1;
  }

  const matches = school.vacancy.match(/\d+/g);
  if (!matches) {
    return -1;
  }

  return matches.reduce((sum, item) => sum + Number(item), 0);
}

export function filterKindergartens(kindergartens, filters) {
  const visible = kindergartens.filter((school) => {
    if (filters.type !== "all" && school.type !== filters.type) {
      return false;
    }

    if (filters.distance !== "all") {
      const limit = Number(filters.distance);
      const currentDistance = getDistanceByBasis(school, filters.basis);

      if (currentDistance > limit) {
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
        school.tuition,
      ]
        .join(" ")
        .toLowerCase();

      if (!haystack.includes(query)) {
        return false;
      }
    }

    return true;
  });

  return visible.sort((left, right) => {
    if (filters.sort === "rating") {
      return (right.rating ?? 0) - (left.rating ?? 0);
    }

    if (filters.sort === "vacancy") {
      return getVacancyScore(right) - getVacancyScore(left);
    }

    if (filters.sort === "name") {
      return left.name.localeCompare(right.name, "zh-Hant");
    }

    return getDistanceByBasis(left, filters.basis) - getDistanceByBasis(right, filters.basis);
  });
}
