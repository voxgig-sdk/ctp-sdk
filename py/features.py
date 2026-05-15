# Ctp SDK feature factory

from feature.base_feature import CtpBaseFeature
from feature.test_feature import CtpTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CtpBaseFeature(),
        "test": lambda: CtpTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
