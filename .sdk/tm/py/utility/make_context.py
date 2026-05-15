# Ctp SDK utility: make_context

from core.context import CtpContext


def make_context_util(ctxmap, basectx):
    return CtpContext(ctxmap, basectx)
