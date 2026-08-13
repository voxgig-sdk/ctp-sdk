# Ctp SDK utility: make_context

from projectname_sdk.core.context import CtpContext


def make_context_util(ctxmap, basectx):
    return CtpContext(ctxmap, basectx)
