# Ctp SDK utility: feature_add
module CtpUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
