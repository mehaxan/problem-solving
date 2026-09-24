def get_pairs(ar):
    pairs = []

    for i in range(len(ar)):
        for j in range(i + 1, len(ar)):
            pairs.append((ar[i], ar[j]))
            
    return pairs